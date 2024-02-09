'use strict'
import { response } from 'express'
import Animal from './animal.model.js'
import { checkUpdateAnimal} from '../utils/validator.js'


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
        return res.json({ total: totalAnimales });

    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error listing animals', error: error })
    }
}


export const buscarAnimal = async(req, res) =>{
    try {
        let {param} = req.params
        let animal = await Animal.findOne({_id : param});
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

export const updateAnimal = async(req, res)=>{
    try {
        let {id} = req.params
        let data = req.body
        let update =  checkUpdateAnimal(data, id)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be update'})
        let updateAnimal = await Animal.findOneAndUpdate(
            { _id: id },
            data,
            {new: true} 
        )
        if (!updateAnimal) return res.status(401).send({ message: 'Animal not found' })
        return res.send({ message: 'Animal  update', updateAnimal })
    } catch (error) {
        console.error(error)
        if(error.keyValue.nameAnimal ) return res.status(400).send({message: `Name ${error.keyValue.nameAnimal} is alredy taken ` })
        return res.status(500).send({ message: 'Error updating' })
    }
    
}