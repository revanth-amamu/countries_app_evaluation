const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { UserModel } = require("../models/user.model");

authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                console.log(err.message);
            } else {
                const user = new UserModel({ name, email, password: hash });
                await user.save();
                res.send({ msg: "Signup successful" });
            }
        });

    } catch (err) {
        res.send({ msg: "Something went wrong", error: err.message });
    }
});

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
                    res.send({ msg: "Login successful", token });
                } else {
                    res.send({ msg: "Wrong credentials" , error: err.message});
                }
            });
        } else {
            res.send({ msg: "User not registered" });
        }

    } catch (err) {
        res.send({ msg: "Something went wrong", error: err.message });
    }
});

authRouter.get("/logout", async (req, res) => {
    try {
        res.send({ msg: "Logout successful" });
    } catch (err) {
        res.send({ msg: "Something went wrong", error: err.message });
    }
})

module.exports = {
    authRouter
}