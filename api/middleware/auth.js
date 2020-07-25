const jwt = require('jsonwebtoken');
const secret = "affordly_secret_token";

module.exports = function(req, res, next) {
    // get the token from the header
    const token = req.header('x-auth-token');


    // check if no token is present
    if(!token){
        return res.status(401).json({ msg: "Token not found. Auth denied!" });
    }

    // verfy the token
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.user;
        next();
    } catch(e) {
        return res.status(401).json({ msg: "Token is not valid!"});
    }
}