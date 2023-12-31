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

usuarioSchema.set('toJSON', { virtuals:true,versionKey:false,transform:function(doc, ret, options) {    
     ret.id= ret._id
     delete ret._id;
     delete ret.password
     delete ret.v

}});

export const UsuarioModel = mongoose.model('User', usuarioSchema);