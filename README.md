AutoDesk simple service

the api provided:

GET /tweets?query=STRING <br>
This service provides the last 10 tweets involving the query given.<br>
example:<br>
/tweets?query=some_query<br>
will return a json with the last 10 tweets that answer this query.<br>

GET /health<br>
will return a json with the following keys regarding the machine<br>
running the service:<br>
-OS Name<br>
-NodeJs versions<br>
-Memory Usage<br>
-CPU usage<br>
<br>
A link for an active service on Heroku:<br>
link PlaceHolder<br>

How to run locally on docker:<br>
1. Go to the project directory<br>
2. Run the following commands on shell:<br>
$ docker build . -t image-name<br>
$ docker run -p 5000:5000 -d image-name<br>
3. Go to http://localhost:5000/<br>
