import mongoose, { Schema } from 'mongoose'

const animalSchema = mongoose.Schema({
    nameAnimal:{
        type: String, 
        unique: true,
        required: true
    }, 
    typeAnimal:{
        type: String, 
        required: true
    },
    race:{
        type: String, 
        required: true
    },
    genre:{
        type: String, 
        required: true
    },
    paws:{
        type: String, 
        required: true, 
        minLength: 1,
    },
    keeper:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }
})

export default mongoose.model('animal', animalSchema)