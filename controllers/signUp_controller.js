const signUpModel = require('../models/signUp/signUp_model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const signUpController = async (req , res) => {

    console.log("req", req.body);
    if(req.body.password === req.body.con_password){

        bcrypt.hash(req.body.password, saltRounds,async (err, hashPassword) => {
            console.log("hash",hashPassword);
      
            const data =  {
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
                userToken: null,
            }

            try{
                let model = new signUpModel(data);
                console.log("db",model);
                
                await model.save();
    
                // res.cookie("user Id",todo._id)
                res.redirect('/logIn')

            }catch(err){
                console.log("err");
                res.redirect('/logIn')
                
            }
        });
    }else{
        res.redirect('/')
    }
    
}
const signUpform = (req,res)=>{
    res.render('auth-register-basic')
}

module.exports = {signUpController,signUpform}