const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const signUp = require('../controllers/signUp_controller');
const logIn = require('../controllers/logIn_controller')
const passport = require('../config/pasportConfig');
const isAuth = require('../authentication/isAuth')
const authController = require('../controllers/authController')

router.get('/myProfile',isAuth,controller.myProfileController)
router.get('/profilePage',isAuth,controller.profilePage)
router.get('/logout',isAuth,controller.logout);
router.get('/' ,isAuth, controller.defaultController);
router.get('/signUp',signUp.signUpform)
router.post('/signUpController',signUp.signUpController)
router.get('/register',controller.register);
router.get('/logIn',logIn.logIn);
router.post('/logInController', passport.authenticate('local', { failureRedirect: '/logIn' }),logIn.logInController)
router.get('/signIn',controller.signIn);
router.get('/forgotPassword',authController.forgotPassword);
router.post('/forgotPasswordController',authController.forgotPasswordController);
router.get('/changePassword',isAuth,authController.changePassword);
router.post('/chanagePasswordController',authController.chanagePasswordController);
router.get('/otp/:id',authController.otp)
router.post('/resetPass/:id',authController.resetPass)
router.get('/resetPass/:id',authController.resetPass)
router.post('/resetPassword/:id',authController.resetPassword)
router.get('/errorPage',authController.errorPage)
module.exports = router;