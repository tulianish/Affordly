Assignment 4 - Anish Tuli (B00843522)
======================

[Assignment 4](https://github.com/tulianish/CSCI5709-Group2-Project/tree/anishtuli-postFeature) was based on back-end development for enabling the front end created as part of previous deliverables to become functional. I have chosen two features from [Afford.ly](http://the-affordly.herokuapp.com/) that I will be working on, but as part of Assignment 4 I am finishing up - Post Management API Microservice design. I feel this is really important in the whole ecosystem of Afford.ly, as it enables users to create and manage items they list on our classified platform.

## Welcome to Afford.ly's Post Management Microservice

## Table of content

- [Installation](#installation)
    - [Node](#Node)
    - [React](#React)
- [Architecture](#architecture)
- [API Specifications](#api-specifications)
- [Validations](#validations)
- [Files used](#files-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Author](#author)
- [Links](#links)
- [References](#references)

## Installation

### Node

Make sure you have these installed :

- **NodeJS** - v12 or above (recommended)
- **npm** - v3 or above (recommended)

* Clone this repository :
`git clone https://github.com/tulianish/CSCI5709-Group2-Project.git`

* Navigate inside CSCI5709-Group2-Project/ directory :
`cd CSCI5709-Group2-Project`

* Install dependencies :
`npm install`

* Starts the Node server :
`node server.js`

Node server would start serving at `http://localhost:3000/`

## Architecture

[![Afford.ly Post Microserver](https://github.com/tulianish/AffordlyAPIs/blob/master/demo/PostManagementMicroservice.png)](http://the-affordly.herokuapp.com/sell)

## API Specifications

|                                ENDPOINT                                |                                                                                           DESCRIPTION                                                                                           | METHOD |                                                                                                                                                                                                             REQUEST PAYLOAD                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              RESPONSE BODY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                         ERROR MESSAGE                                                                                                                                                                                                         | ERROR CODE |
|:----------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------:|
| http://the-affordly.herokuapp.com/api/                                 | It is used to fetch all the records in the posts collection regardless of whether it is active or not                                                                                           | GET    |                                                                                                                                                                                                                                                                                                                                                                                                                                         | [ { "_id": "5f18c6beb228c9904f4077e7", "dateCreated": "2020-07-22T23:07:42.502Z", "title": "Sofa Set", "description": "Comfort sofa set from IKEA aged 1 year old. I am relocating so planning to give it over.", "category": "furniture", "price": "200", "contactNumber": "9024017175", "address": "1333, South Park Street", "city": "Halifax", "zip": "B3J 2K9", "email": "anish.tuli@dal.ca", "isActive": true, "img": "https://res.cloudinary.com/doqj6ktj2/image/upload/v1595459258/mjw7hmn5n6wje2antsmz.jpg", "__v": 0, "id": "5f18c6beb228c9904f4077e7" }, { "_id": "5f18c6beb228cgfhgf6rg6h", "dateCreated": "2020-07-22T23:07:42.502Z", "title": "Sofa Set", "description": "Comfort sofa set from IKEA aged 1 year old. I am relocating so planning to give it over.", "category": "furniture", "price": "200", "contactNumber": "9024017175", "address": "1333, South Park Street", "city": "Halifax", "zip": "B3J 2K9", "email": "anish.tuli@dal.ca", "isActive": false, "img": "https://res.cloudinary.com/doqj6ktj2/image/upload/v1595459258/mjw7hmn5n6wje2antsmz.jpg", "__v": 0, "id": "5f18c6beb228c9904f4077e7" } ] | {success : false,error: err.message}                                                                                                                                                                                                                                                                                                                                                                                          | 404        |
| http://the-affordly.herokuapp.com/api/post?id=5f18c6beb228c9904f4077e7 | It is used to fetch a particular record in the posts collection. It expects you to pass valid postId (objectId format) you want the record for as part of req.params.                           | GET    |                                                                                                                                                                                                                                                                                                                                                                                                                                         | [ { "_id": "5f18c6beb228c9904f4077e7", "dateCreated": "2020-07-22T23:07:42.502Z", "title": "Sofa Set", "description": "Comfort sofa set from IKEA aged 1 year old. I am relocating so planning to give it over.", "category": "furniture", "price": "200", "contactNumber": "9024017175", "address": "1333, South Park Street", "city": "Halifax", "zip": "B3J 2K9", "email": "anish.tuli@dal.ca", "isActive": true, "img": "https://res.cloudinary.com/doqj6ktj2/image/upload/v1595459258/mjw7hmn5n6wje2antsmz.jpg", "__v": 0, "id": "5f18c6beb228c9904f4077e7" } ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | {success : false,error: err.message}                                                                                                                                                                                                                                                                                                                                                                                          | 404        |
| http://the-affordly.herokuapp.com/api/activePosts                      | It is used to fetch all active records in the post collection.These are identified by isActive field.                                                                                           | GET    |                                                                                                                                                                                                                                                                                                                                                                                                                                         | [ { "_id": "5f18c6beb228c9904f4077e7", "dateCreated": "2020-07-22T23:07:42.502Z", "title": "Sofa Set", "description": "Comfort sofa set from IKEA aged 1 year old. I am relocating so planning to give it over.", "category": "furniture", "price": "200", "contactNumber": "9024017175", "address": "1333, South Park Street", "city": "Halifax", "zip": "B3J 2K9", "email": "anish.tuli@dal.ca", "isActive": true, "img": "https://res.cloudinary.com/doqj6ktj2/image/upload/v1595459258/mjw7hmn5n6wje2antsmz.jpg", "__v": 0, "id": "5f18c6beb228c9904f4077e7" }, { "_id": "5f18c6beb228cgfhgf6rg6h", "dateCreated": "2020-07-22T23:07:42.502Z", "title": "Sofa Set", "description": "Comfort sofa set from IKEA aged 1 year old. I am relocating so planning to give it over.", "category": "furniture", "price": "200", "contactNumber": "9024017175", "address": "1333, South Park Street", "city": "Halifax", "zip": "B3J 2K9", "email": "anish.tuli@dal.ca", "isActive": true, "img": "https://res.cloudinary.com/doqj6ktj2/image/upload/v1595459258/mjw7hmn5n6wje2antsmz.jpg", "__v": 0, "id": "5f18c6beb228c9904f4077e7" } ]  | {success : false,error: err.message} where err.message could be : { "error": "Invalid postId passed"  }                                                                                                                                                                                                                                                                                                                       | 404        |
| http://the-affordly.herokuapp.com/createPosts                          | It is used to create a new post record in the post collection. It automatically marks any new post to be active (i.e. isActive : true)                                                          | POST   | { title : Sofa Set, description : Comfort sofa set from IKEA aged 1 year old. I am relocating so planning to give it over, category : furniture, price : 200, contactNumber : 9024017175, address : 1333, South Park Street, city : Halifax, zip : B3J 2K9, email : "anish.tuli@dal.ca", //Use session API to fetch current logged in user img: https://res.cloudinary.com/doqj6ktj2/image/upload/v1595459258/mjw7hmn5n6wje2antsmz.jpg} | { message: 'Post created successfully' }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | {success : false,error: err.message} where err.message could be : { "error": "Title not provided" or "error": "Description not provided" or "error": "Category not provided" or "error": "Price not provided" or "error": "Contact Number not provided" or "error": "Address not provided" or "error": "City not provided" or "error": "Zip not provided" or "error": "Email not provided" or "error": "Image not provided" } | 406        |
| http://the-affordly.herokuapp.com/post?id=5f18c6beb228c9904f4077e7     | It is used to mark an active post as sold and update its active status to become inactive. Internally, it updated the isActive field to false which makes it unreachable to any futher listings | PUT    |                                                                                                                                                                                                                                                                                                                                                                                                                                         | { message: 'Post marked as inactive' }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | {success : false,error: err.message} where err.message could be : { "error": "Post is aleady inactive" }                                                                                                                                                                                                                                                                                                                      | 406        |

## Files used

| File              | Path                                                        | Description                                                                                         | Author          | Modified by |
|-------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-----------------|-------------|
| db.js             | CSCI5709-Group2-Project/api/_helpers/db.js                  | It is a helper file that manages our database connection                                            | Anish Tuli      | Anish Tuli  |
| postRoute.js      | CSCI5709-Group2-Project/Routes/postRoute.js                 | It helps us manage routing between various routes and calls the controller based on endpoint        | Anish Tuli      | Anish Tuli  |
| postController.js | CSCI5709-Group2-Project/Controllers/postController.js       | It handles all the business logic behind every request and passes its results to router             | Anish Tuli      | Anish Tuli  |
| postModel.js      | CSCI5709-Group2-Project/Models/postModel.js                 | It stores our database schema that is used to create/edit records                                   | Anish Tuli      | Anish Tuli  |
| server.js         | CSCI5709-Group2-Project/server.js                           | It is our main Node server file that redirects requests to postRooute file                          | Anish Tuli      | Anish Tuli  |
| sell.js           | CSCI5709-Group2-Project/affordly/src/pages/sell.js          | It is the 'Create a post' page built on React where I am calling the API to store to database       | Piyush Piyush   | Anish Tuli  |
| Careers.js        | CSCI5709-Group2-Project/affordly/src/components/Careers.js  | It is the react component that renders on the Career's Page. I updated it to remove lorem ipsum.    | Anish TUli      | Anish Tuli  |
| home.js           | CSCI5709-Group2-Project/affordly/src/components/home.js     | It renders our home page. I updated it to fetch posts from the activePosts API                      | Piyush Piyush   | Anish Tuli  |
| Posting.jsx       | CSCI5709-Group2-Project/affordly/src/components/Posting.jsx | It is our product description page. I updated it to fetch post information from my /post (byId) API | Sarabjeet Singh | Anish Tuli  |

## Testing

I have performed API testing manually as well as using Postman<sup>[9]</sup>.<br/>

Case where I am adding a new post manually:
![Sell an item](https://github.com/tulianish/CSCI5709-Group2-Project/blob/anishtuli-postFeature/demo/SellAnItem.png)<br/>

New post product description page
![New post](https://github.com/tulianish/CSCI5709-Group2-Project/blob/anishtuli-postFeature/demo/NewPosts.png)<br/>

New post created has all entries stored in database:
![Database Entry](https://github.com/tulianish/CSCI5709-Group2-Project/blob/anishtuli-postFeature/demo/DatabaseEntry.png)<br/>

Case where I am marking an inactive item as sold using Postman<sup>[9]</sup>:
![Postman Testing](https://github.com/tulianish/CSCI5709-Group2-Project/blob/anishtuli-postFeature/demo/Testing.png)


## Deployment

Deployed using [Heroku](https://heroku.com/) at [Afford.ly](http://the-affordly.herokuapp.com/).

## Built With

* [Node](https://nodejs.org/en/docs/) - Open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser
* [React](https://reactjs.org/docs/getting-started.html) - Lightweight framework used for building Afford.ly
* [npm](https://docs.npmjs.com) - Node Package Manager 
* [Bootstrap4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - Open source CSS framework for responsive design
* [React-bootstrap](https://react-bootstrap.github.io/getting-started/introduction) - Adding bootstrap elements to react
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) - Used for routing with React
* [Font Awesome](https://fontawesome.com/start) - Open Source Icon Library
* [Cloudinary](http://cloudinary.com/) - Cloud based image storage
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud host for MongoDB

## Author

* [Anish Tuli, B00843522](anish.tuli@dal.ca)

## Links

* [Web site](http://the-affordly.herokuapp.com/)
* [Documentation]()
* [Issue tracker]()
* [Source code]()

## References

[1]"Docs | Node.js", Node.js, 2020. [Online]. Available: https://nodejs.org/en/docs/. [Accessed: 23- Jul- 2020].<br/>
[2]"Getting Started – React", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: 23- Jul- 2020].<br/>
[3]"npm Documentation", Docs.npmjs.com, 2020. [Online]. Available: https://docs.npmjs.com. [Accessed: 23- Jul- 2020].<br/>
[4]a. Mark Otto, "Introduction", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.0/getting-started/introduction/. [Accessed: 23- Jul- 2020].<br/>
[5]"How to do Simple Form Validation in #Reactjs | Learnetto", Learnetto - Professional software courses, 2020. [Online]. Available: https://learnetto.com/blog/react-form-validation. [Accessed: 23- Jul- 2020].<br/>
[6]React-bootstrap.github.io, 2020. [Online]. Available: https://react-bootstrap.github.io/getting-started/introduction. [Accessed: 23- Jul- 2020].<br/>
[7]"react-router-dom", npm, 2020. [Online]. Available: https://www.npmjs.com/package/react-router-dom. [Accessed: 23- Jul- 2020].<br/>
[8]"Font Awesome", Fontawesome.com, 2020. [Online]. Available: https://fontawesome.com/start. [Accessed: 23- Jul- 2020].<br/>
[9]"Postman Introduction", Postman Learning Center, 2020. [Online]. Available: https://learning.postman.com/docs/getting-started/introduction/. [Accessed: 23- Jul- 2020].<br/>
[10]"Connect to a Cluster — MongoDB Atlas", Docs.atlas.mongodb.com, 2020. [Online]. Available: https://docs.atlas.mongodb.com/connect-to-cluster/. [Accessed: 23- Jul- 2020].<br/>
[11]"Upload API Reference | Cloudinary", Cloudinary.com, 2020. [Online]. Available: https://cloudinary.com/documentation/image_upload_api_reference. [Accessed: 23- Jul- 2020].<br/>
