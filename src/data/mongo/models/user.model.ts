import mongoose from "mongoose";


const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    emailVerificado: {
        type: Boolean,
        default: false
    },
    
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    img: {
        type: String        
    },
    rol:{
        type: [String],
        enum:['admin','user'],
        default:['user'],
        required: [true, 'El rol es requerido']
    },

    

});

export const UsuarioModel = mongoose.model('User', usuarioSchema);