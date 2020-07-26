Assignment 4

![Afford.ly](public/images/logo.png)

* If you want to see my live project running, open this link in your browser (https://the-affordly.herokuapp.com/).
* If you want to see my Payment feature running, open this link in your browser (https://the-affordly.herokuapp.com/payment).
* If you want to see the actual README with all its effects and images, please go to my branch named "piyush_piyush-paymentFeature" on GitHub repository using link (https://github.com/tulianish/CSCI5709-Group2-Project/tree/piyush_piyush-paymentFeature).
* If you want to see the README with all effects, visit my branch.

[**Afford.ly**](https://the-affordly.herokuapp.com/) is a web application
wherein users can sell or buy items (old or new). This is built in an
effort to help people who can not buy new things or wants to sell their
things that are of no longer in use for them. Reffred from my Assignment 2 README file.

-   Date Created: 25 July 2020
-   Last Modification Date: 25 July 2020

Table of Content
----------------

- [Author](#author)
- [Author Contribution](#author-contribution)
- [Developed Using](#developed-using)
- [Tools Used](#tools-used)
- [Deployment Link (https://the-affordly.herokuapp.com/)](#deployment-link--https---the-affordlyherokuappcom--)
- [End Point of My Payment Feature (https://the-affordly.herokuapp.com/payment)](#end-point-of-my-payment-feature--https---the-affordlyherokuappcom-payment-)
- [GitHub Repository Branch Link (https://github.com/tulianish/CSCI5709-Group2-Project/tree/piyush_piyush-paymentFeature)](#github-repository-branch-link--https---githubcom-tulianish-csci5709-group2-project-tree-piyush-piyush-paymentfeature-)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
- [Payment Feature Workflow](#payment-feature-workflow)
  * [Valid Card Details (Enter these details to check payment feature)](#valid-card-details--enter-these-details-to-check-payment-feature-)
- [Sources Used](#sources-used)
- [Features](#features)
- [References](#references)
- [Acknowledgments](#acknowledgments)


Author
------

This assignment is done individually by the author mentioned below.

-   [Piyush](piyush@dal.ca) - (Primary Developer)

Author Contribution
------

``` {.bash}
For my feature, I am using files: -
1. payment.js (Available at - affordly/src/components/payment.js)
2. Payment.js (Available at - affordly/src/pages/payment.js)
3. payment.css (Available at - affordly/src/stylesheets/payment.js)
4. payment.js (Available at - api/Controllers/payment.js)
5. payment.js (Available at - api/Models/payment.js)
6. payment.js (Available at - api/Routes/payment.js)
```

**1.** **Files Created**

**i.** **Components**
-   navbar.js (Available at - affordly/src/components/navbar.js)

**ii.** **Pages**
-   aboutus.js (Available at - affordly/src/pages/aboutus.js)
-   home.js (Available at - affordly/src/pages/home.js)
-   incident.js (Available at - affordly/src/pages/incident.js)
-   login.js (Available at - affordly/src/pages/login.js)
-   sell.js (Available at - affordly/src/pages/sell.js)
-   signup.js (Available at - affordly/src/pages/signup.js)

**iii.** **Stylesheets (css files)**
-   aboutus.css (Available at - affordly/src/stylesheets/aboutus.css)
-   home.css (Available at - affordly/src/stylesheets/home.css)
-   incident.css (Available at - affordly/src/stylesheets/incident.css)
-   login.css (Available at - affordly/src/stylesheets/login.css)
-   navbar.css (Available at - affordly/src/stylesheets/navbar.css)
-   sell.css (Available at - affordly/src/stylesheets/sell.css)
-   signup.css (Available at - affordly/src/stylesheets/signup.css)

**iv.** **Controllers**

-   payment.js (Available at - api/Controllers/payment.js)

**iv.** **Models**

-   payment.js (Available at - api/Models/payment.js)

**iv.** **Routes**

-   payment.js (Available at - api/Routes/payment.js)

**2.** **Files Modified**

**i.** **Components**
-   payment.js (Available at - affordly/src/components/payment.js)

``` {.bash}
Modifications Made:

 1. Added (*) in red color to indicate that the fields are mandatory.
 2. Shifted all the fields label to the left to make it look more appealing and sync it with the frontend of other pages used in our project.
 3. Displayed all the frontend validation error messages in red color.
 4. Modified the eroor messages on click of "Pay Now" button to make it more comprehensive.
 5. Added months and years manually in the dropdown menu.
 6. Added logic to extract the details entered by users in the payment form.
```

**ii.** **Stylesheets (css files)**
-   payment.css (Available at - affordly/src/stylesheets/payment.css)

``` {.bash}
Followed MVC pattern since all of my routes, models, views, and controllers are defined in different files.
```


Developed Using
-----------

This web application is built using Node, React, React-Bootstrap, NPM,
React-Router-DOM, and Heroku. For generating pdf and sending email upon payment confirmation, I have use two packages named, "pdfkit", and "nodemailer".

**1.** [**Node**](https://nodejs.org/en/download/) - This was used to
serve the entire React application.

**2.** [**React**](https://reactjs.org/) - This is the framework that
was used to provide all the functionalities in the frontend or single
page web application.

**3.** **React Bootstrap** (Downloaded with the help of npm command as
shown below) - This was used style the entire web application and re-use
the components that suits my web application.

``` {.bash}

npm install react-bootstrap
```

**4.** **NPM** (This is a node package manager which comes along with
Node download) - This was used to install all the packages or
dependencies whenever needed.

``` {.bash}
For instance- npm install react-router
```

**5.** **React-Router-DOM** (Downloaded with the help of npm command as
shown below) - This was used to perform routing within the web
application so that the links become workable whenever they are clicked.

``` {.bash}
npm install react-router-dom
```

**6.** **Heroku** - This was used to finally deploy my web application
to make is publicly access by everyone.

Tools Used
----------

**1.** **Visual Studio Code 1.45.1**

**2.** **Git Bash**

Deployment Link (https://the-affordly.herokuapp.com/)
--------------------------------------------------

-   Deployed using Heroku after merging my feature branch with the master branch.

End Point of My Payment Feature (https://the-affordly.herokuapp.com/payment)
----------------------
-   End point to access my payment feature

GitHub Repository Branch Link (https://github.com/tulianish/CSCI5709-Group2-Project/tree/piyush_piyush-paymentFeature)
--------------------------------------------------------------
-   Access my GitHub repo branch directly from the above link.


Getting Started
---------------

In order to run this web application locally on your system, you need to
open **Command Prompt** or **Git Bash** and clone the repository using
command:

``` {.bash}
https://github.com/tulianish/CSCI5709-Group2-Project.git
```

### Prerequisites

To run this web application, you must have **Node.js** installed in
your system. If it is not installed, install the latest version of
Node.js from the link:

``` {.bash}
https://nodejs.org/en/download/
```

To continue further with the run process, follow the steps mentioned
below under Installation.

### Installation

**1.** Once the Git repository is cloned in your system locally, and the
prerequisites are installed, navigate to the cloned folder.

**2.** Upon navigation to the root folder, install all the dependencies
and packages using command:

``` {.bash}
npm install
```

This command will install all of your dependencies and packages that
were used to create this project. It looks into your **package.json**
file and installs the things at a go. It will take some time, please
wait...

**3.** Once the packages used in this assignment are downloaded, run the
command:

``` {.bash}
npm start
```

This command will start serving the assignment on browser. Node is
responsible for serving it, which is triggered by the above command.

**4.** In order to run this application locally, you need to change the heroku links used to connect frontend and backend by http://localhost:3000/ .

**5.** Open the browser (Google Chrome, Safari, etc..) and run localhost
on port 3000 using the link:
This will help you start running project and load the home page.

``` {.bash}
http://localhost:3000/
```

Payment Feature Workflow
------------------------

**1.** Open the page where my feature is deployed. 
There are two ways to reach to my feature: - 
-   Directly use the link https://the-affordly.herokuapp.com/payment . 
-   Use the link https://the-affordly.herokuapp.com/ to navigate to the homepage. 
After that click on "Details" button on any of the items listed on homepage. 
Upon that, click on "Buy" button. You will land on the payment page.

**2.** Now, I have added a dummy card details in the database that appears to be valid. If the card details entered by the user matches with the details entered by me in the database, then the paymnet will be approved. Else, the payment will be declined. This logic is written in payment.js file present in controllers folder.

### Valid Card Details (Enter these details to check payment feature)

``` {.bash}
Card Holder's Name - Piyush
Card Number - 1234567891234567
Expiry Date - May/ 2024
CVV - 123
```
``` {.bash}
NOTE : "Aadesh Shah" must receive an email with payment confirmation along with the pdf containing all the payment details (permission taken).
```

``` {.bash}
NOTE : If card details entered are different from the one provided avbove, it will not match with the card details present in database and make the payment failure. It will display a "Payment Failure message"
```
**3.** Upon successful payment, an email will be sent to the user (on his registered email address) reflecting payment confirmation message. This email is generated using "nodeMailer" in Node.js.

**4.** Also, a pdf with unique UUID will be sent which contains payment confirmation details along with the card, and purchased product details. User can use this pdf as a proof of purchase to show to the seller while picking up the item. This pdf is generated using "pdfkit" in node.js.

**5.** Since this amount is transferred to the Afford-ly business account, it will later be sent to the seller with the help of our coorporate office. This same concept is followed by major e-commerce web applications such as Amazon, and Flipkart.

``` {.bash}
NOTE : In order to avoid dependency on anyone's backend code (keeping in consideration the time on which that person's assignment is completed), I have assumed that the user landing on my payment page is already logged in. 
Since this is individual assignment, therefore, if I would have directed you to the payment page only after logging in, then there is high possibility of my feature not being accessed, checked, and marked by the TA if in case the Log In functionality written by other team member fails.
Also, for this assignment, none of my team members is working on "Details" page which has "Buy" button. Therefore, the logic to check if the user is logged in, and redirect to "Payment" page upon clicking on "Buy" button is not anyone's part of Assignment 4. It will be handled by the person working on "Details" page during completion of project.
```

``` {.bash}
NOTE : I have entered email address of "Aadesh Shah", my TA, upon his permission so that the email upon payment confirmation will be sent to his email address. Therefore, he can easily check the email, pdf generated by logic, and my payment feature. In final project, email will be same as that of person who is logged in. If I would have not entered the email address of Aadesh Shah, then payment confirmation email will be sent to the user's (Piyush) email address and hence cannot be checked and marked by me TA.
```

Sources Used
------------

In order to accomplish my assignment, in particular, "Payment" feature, I have referred the official documentation of-
-   Nodemailer from https://nodemailer.com/usage/
-   PDFKit from https://www.npmjs.com/package/pdfkit

Features
------------

**1.** My web application is compatible with cross browser.
**2.** I have followed the proper MVC pattern since all of my routes, models, views, and controllers are defined in different files.
**3.** Sending email to the user upon payment confirmation.
**4.** Matching details entered by the user with the valid card present in the database.
**5.** Attaching the pdf with the email that contains payment details.

References
----------

[1] "pdfkit", npm, 2020. [Online]. Available: https://www.npmjs.com/package/pdfkit. [Accessed: 23- Jul- 2020].

[2] A. Reinman, "Nodemailer :: Nodemailer", Nodemailer.com, 2020. [Online]. Available: https://nodemailer.com/about/. [Accessed: 24- Jul- 2020].

[3] "Nodemailer", Nodemailer, 2020. [Online]. Available: https://community.nodemailer.com/. [Accessed: 24- Jul- 2020].

[4] "axios", npm, 2020. [Online]. Available: https://www.npmjs.com/package/axios. [Accessed: 23- Jul- 2020].

[5] "Heroku Dev Center", Devcenter.heroku.com, 2020. [Online]. Available: https://devcenter.heroku.com/. [Accessed: 23- Jul- 2020].




Acknowledgments
---------------

-   React Online Bootstrap Community
-   Node Community
-   Professor
-   TAs

