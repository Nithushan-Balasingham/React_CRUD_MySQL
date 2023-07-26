const db = require('../models');
const User = db.users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Assuming you have defined the Details model

const signup = async (req, res) => {
  try {
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const username = req.body.username;
    const email = req.body.email;
    
    const users = {
      "username": username,
      "email": email,
      "password": encryptedPassword
    };
    const emailExists = await User.findOne({where: {email:email}})
    if (emailExists){
      res.status(401).json("Email already existed")
    }
    else{
    const user = await User.create(users);
    res.json(user);
    }
  } catch (error) {
    console.error('Error during signup:', error);
    res.json({ error: 'Error during signup' });
  }
};


const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        req.session.loggedIn = true;
        req.session.user = user;
        req.session.loggedIn = true;

        res.json({ message: "Success" });
      } else {
        res.json({ message: "Fail" });
      }
    } else {
      res.json({ message: "Fail" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.json({ error: "Error during login" });
  }
};
const isLoggedIn = (req, res) => {
  if (req.session.loggedIn) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
};

const logout = (req, res) => {
  // Destroy the session
  req.session.destroy(err => {
    if (err) {
      console.error('Error during logout:', err);
      res.status(500).json({ error: 'Failed to logout' });
    } else {
      res.clearCookie('connect.sid');
      res.json({ success: true, message: 'Logout successful' });
    }
 } ) }
    
const getAllUsers = async (req,res) =>{
      let users = await User.findAll({})
      res.status(200).send(users)
  }
  // get single product
  const getOneUser = async (req,res) =>{
      let id = req.params.id
      let user = await User.findOne({where : {id : id}})
      res.status(200).send(user)
  }
  
  // update product
  const updateUsers = async (req,res) =>{
      let id  = req.params.id
      const user = await User.update(req.body, {where : {id:id}})
      res.status(200).send(user)
  }
  
  // Delete product by id
  const deleteUser = async (req,res) =>{
      let id = req.params.id
      await User.destroy({where:{id:id}})
      res.status(200).send('User is deleted')
  }
module.exports = {
  signup,
  signin,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUsers,
  isLoggedIn,
  logout
  

}