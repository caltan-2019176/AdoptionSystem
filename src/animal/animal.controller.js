'use strict'
import { response } from 'express'
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

export const obtenerAnimal = async (req, res = response) => {

    try {
        const totalAnimales = await Animal.find();
        res.json({ total: totalAnimales });

    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error listing animals', error: error })
    }
}


export const buscarAnimal = async(req, res) =>{
    try {
        let {id} = req.params
        let animal = await Animal.findOne({_id : id});
        return res.json({ message: 'Animal find', animal })


    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error seraching animal', error: error })
    }
}


export const deleteAnimal = async (req, res) =>{
    try {
        
        let{id} = req.params
        let deletedAnimal =  await Animal.findOneAndDelete({_id: id})
        if(!deletedAnimal) return res.status(404).send({message: 'Animal not found and not deleted'})
        return res.send({message: `Animal ${deletedAnimal.nameAnimal} deleted successfully`})

    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error deleting Animal', error: error })
    }


}