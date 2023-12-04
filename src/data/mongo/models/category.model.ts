import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es requerido']
    },
    disponible: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es requerido']
    }


});

categorySchema.set('toJSON', {
    virtuals: true, versionKey: false, transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.usuario;
    }
});

export const CategoryModel = mongoose.model('Category', categorySchema);