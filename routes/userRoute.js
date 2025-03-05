const express = require('express')

const {home, createUser, getAllUsers,updateuser, deleteUser} = require('../controllers/userController.js')

const routes = express.Router()

routes.get('/',home)
routes.post('/createuser',createUser)
routes.get('/getallusers',getAllUsers)
routes.put('/updateuser/:id',updateuser)
routes.delete('/deleteuser/:id',deleteUser)

module.exports = routes