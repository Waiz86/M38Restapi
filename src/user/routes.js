const { Router } = require("express"); //import Router method only from express
const { signUp, login } = require("./controllers"); //import only signUp from controllers file
const userRouter = Router(); //create a router that can have endpoints added to it
const { hashPass, unHashPass } = require("../middleware");
userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller
userRouter.post("/login", unHashPass, login); 

module.exports = userRouter;