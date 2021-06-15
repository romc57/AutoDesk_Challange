AutoDesk simple service

the api provided:

GET /tweets?query=STRING <br>
This service provides the last 10 tweets involving the query given.
example:
/tweets?query=some_query
will return a json with the last 10 tweets of the user.

GET /health<br>
will return a json with the following keys regarding the machine
running the service:
-OS Name
-NodeJs versions
-Memory Usage
-CPU usage

A link for an active service on Heroku:
link PlaceHolder

How to run locally on docker:
1. Go to the project directory
2. Run the following commands on shell:
$ docker build . -t <image-name>
$ docker run -p 5000:5000 -d <image-name>
3. Go to http://localhost:5000/
