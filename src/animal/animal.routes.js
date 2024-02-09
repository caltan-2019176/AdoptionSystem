import express from 'express'
import { buscarAnimal, deleteAnimal, guardarAnimal, obtenerAnimal, testA } from './animal.controller.js';
const api = express.Router();
api.get('/testA', testA)
api.post('/guardarAnimal', guardarAnimal)
api.get('/obtenerAnimal', obtenerAnimal)
api.get('/buscarAnimal/:id', buscarAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)



export default api