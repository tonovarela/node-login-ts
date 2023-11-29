import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: true
    },
    available: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        default: 0,
        required: [true, 'El precio es requerido']
    },
    descripcion: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'La categoria es requerida']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es requerido']
    }


});

export const ProductModel = mongoose.model('Product', productSchema);