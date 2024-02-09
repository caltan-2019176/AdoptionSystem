'use strict'
import Animal from './animal.model.js'


export const testA = (req, res)=>{
    console.log('test is running ANIMAL')
    return res.send({message: 'Test is running ANIMAL'})
}

export const guardarAnimal = async(req, res) =>{
    try {
        let data = req.body
        console.log(data)
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: `Registered successfully,${animal.nameAnimal} was register`})

    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error registering animal', error: error})
    }
}

export const obtenerAnimal = async(req, res) =>{
    try {
        
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error listing animals', error: error})
    }
}