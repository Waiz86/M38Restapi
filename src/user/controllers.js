const jwt =require("jsonwebtoken");
const User = require("./model");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
   //req.body is an object that contains k/v pairs that match my User model
   const token = jwt.sign({id: newUser._id,}, process.env.SECRET); // sign method creates a token with object pay 
   res.send({ user: newUser, token });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.login = async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (!user) {
        throw new Error("Incorrect credentials");
      } else {
        res.send({ user });
      }
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };