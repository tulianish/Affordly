#  Assignment 4
This assignment 4 is hosted at: https://the-affordly.herokuapp.com
The code for this assignment is hosted at: https://github.com/tulianish/CSCI5709-Group2-Project
This is a private repository and access has been provided to the professor.

Files created by me can be found under affordly-flask branch. Since I don't want them to interfere with the node code, the branch is not erged with master. The file created by me is:
  1. app.py

Files modified by me for integration of frontend and backend are:
  1. home.js    (affordly/src/pages/home.js)
  2. Posting.jsx    (affordly/src/pages/Posting.jsx)

Endpoints of features created by me are:
    1. http://35.153.255.72/clicked?post_id=<some-ID>           (Increase click per count)
    2. http://35.153.255.72/trending           (Fetch trending items) 


[Optional] If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.
This is a group work, submitted as an assignment. For this assignment, I have created 3 APIs using Node, Express and React (to consume these APIs). I have selected said technologies because of:
  Flask: Since I had experience woring in Django and Flask, I chose to develop my backend features in Flask. I did not go with Django because we use MongoDB and Django ORM has limited compatibility with NoSQL databases.
  React: Since our front end was on React, I had to use React to consume APIs at the front end
    

* Date Created: 25 July 2020
* Last Modification Date: 25 July 2020

## Authors
This is an individual assignment. However, APIs written by are being used by my fellow teammates. The code of our entire team is being hosted at the same place.

Rahul Anand  (rahul.anand@dal.ca)  B00841310


## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

Link of the GitLab repository hosting the code of this project: https://github.com/tulianish/CSCI5709-Group2-Project


### Prerequisites

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following asoftware libraries
```
1. Node
2. NPM (Node Package Manager)
3. Python
4. pip
5. flask (instlled using pip)
6. pymongo (instlled using pip)
7. dnspython (instlled using pip)

The API calls have been hard coded. Hence in order to run this locally, those APIs have to be changed to localhost calls
```



## Running the tests

No automated tests were written for this application and APIs.
However, marker can check the APIs by calling them from Postman. The links of APIs developed by me are:
    1. http://35.153.255.72/clicked?post_id=<some-ID>           (Increase click per count)
    2. http://35.153.255.72/trending           (Fetch trending items) 


## Deployment
For this assignment/project, we have deployed the master branch of our project repository on Heroku.
The applciation can be accessed at : https://the-affordly.herokuapp.com
The endpoint of my features are:
    1. http://35.153.255.72/clicked?post_id=<some-ID>           (Increase click per count)
    2. http://35.153.255.72/trending           (Fetch trending items) 


## Sources Used
For this assignment, I have not used any external resources. The code is original and is not copied/modified from internet. The deployment of API is done on AWS educate account.


## REFERENCES 

[1]"Welcome to Flask — Flask Documentation (1.1.x)", Flask.palletsprojects.com, 2020. [Online]. Available: https://flask.palletsprojects.com/en/1.1.x/. [Accessed: 25- Jul- 2020].
[2]"Consuming REST APIs In React With Fetch And Axios — Smashing Magazine", Smashing Magazine, 2020. [Online]. Available: https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/. [Accessed: 25- Jul- 2020].
[3]2020. [Online]. Available: https://www.youtube.com/watch?v=Wf7-qnD1dNc. [Accessed: 25- Jul- 2020].
[4] "Cloud: MongoDB Cloud", Cloud.mongodb.com, 2020. [Online]. Available: https://cloud.mongodb.com/v2/5f1797ea65745348da398735#metrics/replicaSet/5f179a821c815e25234e7b6f/explorer/affordly/posts/find. [Accessed: 25- Jul- 2020].
