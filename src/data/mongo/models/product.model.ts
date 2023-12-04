import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: true
    },
    disponible: {
        type: Boolean,
        default: true
    },
    precio: {
        type: Number,
        default: 0,
        required: [true, 'El precio es requerido']
    },
    descripcion: {
        type: String,
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'La categoria es requerida']
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es requerido']
    }

});
productSchema.set('toJSON', { virtuals:true ,versionKey:false,transform:function(doc, ret, options) {    
    delete ret._id;
}});

export const ProductModel = mongoose.model('Product', productSchema);