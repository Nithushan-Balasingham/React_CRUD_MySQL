const usercontroler = require ('../controllers/usercontroler.js')
const router = require('express').Router()
// const { requireLogin } = require('../middleware/auth');

// router.get('/protected-route', requireLogin, (req, res) => {
//     // Handle protected route logic
//   });
router.post('/addUser', usercontroler.signin)
router.post('/addUserNew', usercontroler.signup)
router.get('/isLoggedIn',usercontroler.isLoggedIn)
router.post('/logout', usercontroler.logout)
router.get('/getAllUsers', usercontroler.getAllUsers)
router.get('/:id', usercontroler.getOneUser)
router.put('/:id', usercontroler.updateUsers)
router.delete('/:id', usercontroler.deleteUser)



module.exports = router


