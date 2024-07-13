const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]; 
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.send({ msg: "Invalid token", error: err.message });
            }
            req.body.userID = decoded.userID;
        });
        next();
    } else {
        res.send({ msg: "Please login" });
    }
}

module.exports = { auth }