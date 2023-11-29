import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es requerido']
    }
    

});

export const CategoryModel = mongoose.model('Category', categorySchema);