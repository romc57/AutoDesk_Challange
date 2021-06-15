const express = require('express');
const os = require('os');
const twitter = require('twitter-v2');
const process = require('process');
const app = express();
const PORT = process.env.PORT || 5000;
const api_baerer_token = 'AAAAAAAAAAAAAAAAAAAAAPXHQgEAAAAAXOvDXmsRb9z5Jg%2BYu9rg5sAsups%3Did0vbwzzK4ujuzI7FpoTdyUHkjx0ZC5k4CkuLMjAfDfsOtkoW9';
var client = new twitter({
  bearer_token: api_baerer_token
});

// Get function for root, will give instrunctions
app.get('/', function(req, res){
  res.send('Hello, To use the service go to:<br>/tweets<br>or<br>/health');
});

// Get function for tweets service
app.get('/tweets', function(req, res){
  var query = req.query.query
  if(!query){ // if query is not a given param
    res.send('Please enter a query param called query');
  } else {
    getTweets(query).then(tweets => {
    res.send(tweets);
    })
  }
});

// Get function for health service
app.get('/health', function(req, res){
  res.send(getHealth());
});

// Listen on the pre defined port
app.listen(PORT, () => console.log(`Listening`));

// Returns the health parameters of the machine
function getHealth(){
  var dict = {};
  dict['OS Name'] = os.type();
  dict['version'] = process.versions.node;
  dict['Memory Usage'] = (os.totalmem() - os.freemem())/os.totalmem()*100 + '%';
  const cpus = os.cpus();
  const cpu = cpus[0];
  const total = Object.values(cpu.times).reduce(
    (acc, tv) => acc + tv, 0
  );
  const usage = process.cpuUsage();
  const currentCPUUsage = (usage.user + usage.system) * 1000;
  const perc = currentCPUUsage / total;
  dict['CPU Usage'] = perc;
  return JSON.stringify(dict);
}

// Async function to retrieve tweets using tweeter package
async function getTweets(query){
  const { data } = await client.get(
    'tweets/search/recent',
    {
      query: query,
      max_results: 10,
      tweet: {
        fields: [
          'created_at',
          'text'
        ]
      }
    }
  );
  return data;
}
