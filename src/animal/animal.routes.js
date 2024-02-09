import express from 'express'
import { guardarAnimal, testA } from './animal.controller.js';
const api = express.Router();
api.get('/testA', testA)
api.post('/guardarAnimal', guardarAnimal)




export default api