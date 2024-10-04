const isAuth = (req,res,next) => {
    console.log("isAuth");
    
    if(req.isAuthenticated()){
        next();
    }else{
        res.redirect('/login')
    }

}

module.exports = isAuth;