const UserModel = require("../models/UserModel");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const generateUniqueId = require("generate-unique-id");
const { model } = require("mongoose");

const LoginPage = (req, res) => {
    res.render("pages/login");
}

const RegisterPage = (req, res) => {
    res.render("pages/register");
}

const ForgotPage = (req, res) => {
    res.render("pages/forgot");
}

const Logout = (req, res, next) => {
    req.logout((err) => {
        (err) ? next(err) : res.redirect("/signin");
    }); req.logout
}


const otpGenerate = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const otp = generateUniqueId({
            length: 4,
            useLetters: false
        });

        console.log("OTP:", otp);

        await UserModel.findByIdAndUpdate(user._id, { otp: otp });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: false,
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: "OTP Verification - Please Use This Code",
            text: `Your OTP for account verification is: ${otp}`,
            html: `<p>Your OTP for account verification is: <strong>${otp}</strong></p>`,
        };

        await transporter.sendMail(mailOptions);

        res.render("otp", { user });
    } catch (error) {
        console.error("Error generating OTP:", error);
        res.status(500).send("Server error while generating OTP");
    }
};


const otpVerify = async (req, res) => {
    const user = await UserModel.findOne({
        _id: req.body.id
    })

    if(user.otp == req.body.otp){
          res.render("pages/ResetPassword", { user });
    }else{
          res.render("pages/otpVarify", { user });
    }
}

const ResetPassword = async (req , res) => {
    const {id , newPassword, confirmPassword} = req.body;

    if(newPassword === confirmPassword){
        bcrypt.hash(newPassword , 12 , async (err , hashpass) => {
            if(err) return res.status(500).json({message: "Error hashing password"});
            await UserModel.findOneAndUpdate(id , {password: hashpass , otp : null});
            res.redirect("/signin");
        })
    }else{
        console.log("password not forgot");
    }
} 

module.exports = {
    LoginPage,
    RegisterPage,
    ForgotPage,
    Logout,
    otpGenerate,
    otpVerify,
    ResetPassword
}