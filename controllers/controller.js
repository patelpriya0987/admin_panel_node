const dataBase = require('../models/signUp/signUp_model')
const defaultController =async (req , res) =>{
    console.log("req.user",req.user,req.isAuthenticated());
    res.render('index',{data:req.user})
}
const myProfileController = async (req , res) => {
    res.render('myProfile',{data:req.user})
}
const profilePage = (req,res) => {
    res.redirect('/myProfile');
}
const logout = async (req , res) => {
    req.logout((err)=>{
        if (err) {
            next(err);
        }
        res.redirect('/login');
    });
}
const register = (req,res)=>{
    res.redirect('/signUp');
}
const signIn = (req,res)=>{
    res.redirect('/login');
}
module.exports = {defaultController,myProfileController,logout,register,signIn,profilePage}