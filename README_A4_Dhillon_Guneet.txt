#  Assignment 4
This assignment 4 is hosted at:	https://the-affordly.herokuapp.com
The code for this assignment is hosted at: https://github.com/tulianish/CSCI5709-Group2-Project
This is a private repository and access has been provided to the professor.

Files created by me are:
  1. auth.js     (api/middleware/auth.js)
  2. User.js     (api/Models/User.js)
  3. user.js     (api/Routes/user.js)
  4. login.js    (api/Routes/login.js)
  5. current_user.js     (api/Routes/current_user.js)

Files modified by me for integration of frontend and backend are:
  1. navbar.js   (affordly/src/components/navbar.js)
  2. signup.js   (affordly/src/pages/signup.js)
  3. login.js    (affordly/src/pages/login.js)

Endpoints of features created by me are:
	1. https://the-affordly.herokuapp.com/api/user             (SignUp/Register)
  2. https://the-affordly.herokuapp.com/api/login            (Login) 

  - https://the-affordly.herokuapp.com/api/current_user     (Obtain details of logged in user, wrapper on the middleware, used by other team members to access secure routes )


[Optional] If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.
This is a group work, submitted as an assignment. For this assignment, I have created 3 APIs using Node, Express and React (to consume these APIs). I have selected said technologies because of:
	Node: Since I have no experience in Node, I wanted to learn a new technology stack for to make myslef more qualified for more jobs.
  Express: This is used for writing backend APIs for Node projects
  React: Since our front end was on React, I had to use React to consume APIs at the front end
	

* Date Created: 25 July 2020
* Last Modification Date: 25 July 2020

## Authors
This is an individual assignment. However, APIs written by are being used by my fellow teammates. The code of our entire team is being hosted at the same place.

Guneet Singh Dhillon  (gn388812@dal.ca)  B00843346


## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

Link of the GitLab repository hosting the code of this project: https://github.com/tulianish/CSCI5709-Group2-Project


### Prerequisites

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following asoftware libraries
```
1. Node
2. NPM (Node Package Manager)

The API calls have been hard coded. Hence in order to run this locally, those APIs have to be changed to localhost calls
```



## Running the tests

No automated tests were written for this application and APIs.
However, marker can check the APIs by calling them from Postman. The links of APIs developed by me are:
  - https://the-affordly.herokuapp.com/api/user             (SignUp/Register)
  - https://the-affordly.herokuapp.com/api/login            (Login) 
  - https://the-affordly.herokuapp.com/api/current_user     (get the current user)



## Deployment
For this assignment/project, we have deployed the master branch of our project repository on Heroku.
The applciation can be accessed at : https://the-affordly.herokuapp.com
The endpoint of my features are:
	1. https://the-affordly.herokuapp.com/signup
	2. https://the-affordly.herokuapp.com/login



## Sources Used
For this assignment, I've used a lot of resources to help me out.

1. I am pursuing a course on Udemy to help me with MERN stack concepts. I have used this course's videos to create login and signup APIs and auth middleware. The course can be accessed here : https://www.udemy.com/course/mern-stack-front-to-back/
2. For frontend JWT handling, I used the code mentioned in a youtube video. The link to that video is : https://www.youtube.com/watch?v=I3PC8pV1SBM

Login API Code at the source: [[[[

router.post('/', [
    check('email','Please include a valid email address ').isEmail(),
    check('password', 'Password is required').exists()
], 
async (req,res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // check if user exists
        let user = await User.findOne({ email });

         if(!user) {
             return res.status(400).json({ errors: [ { msg: "Invalid Credentials" } ]});
         }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch) {
            return res.status(400).json({ errors: [ { msg: "Invalid Credentials" } ]});
        }

        


        const payload = {
             user: {
                 id: user.id
             }
        };

         jwt.sign(
             payload,
             config.get("jwtSecret"), 
             { expiresIn: 360000 }, 
            (err, token) => {
                // console.log("in sign"); 
                if(err) throw err;
                // console.log("if crossed");
                console.log(token);
                res.json({ token });
            } 
         );

         
        // return jwt

        // console.log(req.body);
        // console.log(req.params)
        // res.send("Users Route");
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
    }
);


]]]] 


Login API Code that I used: [[[[

router.post('/', [
    check('email', 'Email is not in proper format').isEmail()
    // more checks can be added depending upon the extent of backend validation
], async (req,res) => {
    const error = validationResult(req);
    // console.log('gg');
    // console.log(req.body);
    // if(error.isEmpty() === false){
    //     return res.status(400).json({ error: error.array() });
    // }

    // Email and password are destructured
    const { email, password } = req.body;

    try{
        // if email is not present in db, return error 
        let user = await User.findOne({ email: email });
        if(!user) {
            return res.status(400).json({ "error":"Invalid credentials!"});
        }

        // if passwords do not match, return error
        const isCompare = await bcryptjs.compare(password, user.password);
        if(isCompare === false){
            return res.status(400).json({ "error":"Invalid credentials!"});
        }


        const payload = {
            user: {
                email: user.email
            }
        };
        // create and return a json web token which expires in 1800 seconds, i.e. half hour
        jwt.sign(payload, "affordly_secret_token", { expiresIn: 1800 }, (err, token) => {
            if(err){
                throw err;
            }
            // return jwt
            res.json({ token });
        });
    
    } catch (e) {
        console.error(e.message);
        return res.status(500).send('server error');
    }
});


]]]]


Signup code at the source: [[[[

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email','Please include a valid email address ').isEmail(),
    check('password', 'Please include a password of minimum 4 characters.').isLength({min: 4})
], 
async (req,res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {

        // check if user exists
        let user = await User.findOne({ email });

         if(user) {
             return res.status(400).json({ errors: [ { msg: "User already exists" } ]});
         }
         // get users gravatar
         const avatar = gravatar.url(email, {
             s: '200',
             r:'pg',
             d:'mm'
         })

         // user instance created
         user = new User({
             name, email, avatar, password
         })

         // encrypt their password using bcrypt
         const salt = await bcrypt.genSalt(9);
         user.password = await bcrypt.hash(password, salt);
         await user.save();
         console.log(user.password)

         const payload = {
             user: {
                 id: user.id
             }
         };

         jwt.sign(
             payload,
             config.get("jwtSecret"), 
             { expiresIn: 360000 }, 
            (err, token) => {
                // console.log("in sign"); 
                if(err) throw err;
                // console.log("if crossed");
                console.log(token);
                res.json({ token });
            } 
         );

         
        // return jwt

        // console.log(req.body);
        // console.log(req.params)
        // res.send("Users Route");
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server error!");
    }
    }
);

]]]]




Signup code that I used: [[[[

router.post('/', async (req,res) => {
    console.log("called ", req.body);
    const error = validationResult(req);
    if(error.isEmpty() === false){
        return res.status(400).json({ error: error.array() });
    }

    const { first_name, last_name, email, password, gender, address, country, state, zip, bio } = req.body;

    try{
        let user = await User.findOne({ email: email });

        // Return error if email is already registered
        if(user) {
            return res.status(400).json({ "error":"This email has already been registered."});
        }

        user = new User({
            first_name, last_name, email, password, gender, address, country, state, zip, bio
        })

        // Encrypt the password
        const encryption_variable = await bcryptjs.genSalt(5);
        user.password = await bcryptjs.hash(password, encryption_variable);
        
        // Save the user details in database
        await user.save();

        const payload = {
            user: {
                email: user.email
            }
        };

        jwt.sign(payload, "affordly_secret_token", { expiresIn: 1800 }, (err, token) => {
            if(err){
                throw err;
            }
            // return jwt
            return res.json({ "msg":"Registration successful" });
        });
    
    } catch (e) {
        console.error(e.message);
        return res.status(500).send('server error');
    }
});

]]]]


## Acknowledgments
* For backeend, I have used a technologies and methodolies taught in MERN Stack course.


## REFERENCES 

[1] "Cloud Application Platform | Heroku", Heroku.com, 2020. [Online]. Available: https://www.heroku.com. [Accessed: 25- Jul- 2020].
[2] "Download | Node.js", Node.js, 2020. [Online]. Available: https://nodejs.org/en/download/. [Accessed: 25- Jul- 2020].
[3] "MERN Stack Front To Back: Full Stack React, Redux & Node.js", Udemy, 2020. [Online]. Available: https://www.udemy.com/course/mern-stack-front-to-back/. [Accessed: 25- Jul- 2020].
[4] Positronx.io. 2020. [online] Available at: <https://www.positronx.io/react-form-validation-tutorial-with-example/> [Accessed: 25- Jul- 2020].
[5] 2020. [Online]. Available: https://www.youtube.com/watch?v=I3PC8pV1SBM. [Accessed: 25- Jul- 2020].
[6] "Conditional Rendering – React", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/docs/conditional-rendering.html. [Accessed: 25- Jul- 2020].
[7] "React Router Redirect: Programmatic Navigation in React using react-router - DEV", Dev.to, 2020. [Online]. Available: https://dev.to/projectescape/programmatic-navigation-in-react-3p1l. [Accessed: 25- Jul- 2020].
[8] "How to consume a RESTful API in React", Pusher, 2020. [Online]. Available: https://pusher.com/tutorials/consume-restful-api-react. [Accessed: 25- Jul- 2020].
[9] "Cloud: MongoDB Cloud", Cloud.mongodb.com, 2020. [Online]. Available: https://cloud.mongodb.com/v2/5f1797ea65745348da398735#metrics/replicaSet/5f179a821c815e25234e7b6f/explorer/affordly/posts/find. [Accessed: 25- Jul- 2020].