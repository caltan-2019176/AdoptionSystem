import express from 'express'
import { test, register, login, updatePassword, deleteUser, update } from './user.controller.js';


const api = express.Router();

api.get('/test', test)
api.post('/register', register)
api.post('/login', login)
api.put('/updatePassword', updatePassword)
api.delete('/deleteUser/:id', deleteUser)
api.put('/update/:id', update)
export default api