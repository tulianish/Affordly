// Developed by Guneet Singh Dhillon (B00843346, guneet@dal.ca)
// Reference for this code: "MERN Stack Front To Back: Full Stack React, Redux & Node.js", Udemy, 2020. [Online]. Available: https://www.udemy.com/course/mern-stack-front-to-back/. [Accessed: 25- Jul- 2020].

const jwt = require('jsonwebtoken');
const secret = "affordly_secret_token";

module.exports = function(req, res, next) {
    // Receive the JWT token from the header. asd
    const token = req.header('x-auth-token');


    // Return denied, if no token is present.
    if(!token){
        return res.status(401).json({ msg: "Token not found. Auth denied!" });
    }

    // If the token is valid, allow user to access the protected routes, "next()"
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.user;
        next();
    } catch(e) {
        return res.status(401).json({ msg: "Token is not valid!"});
    }
}