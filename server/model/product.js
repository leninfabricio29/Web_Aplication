const mongoose = require('mongoose');
//Relacion entre Categoria y Producto
const { ObjectId } = mongoose.Schema
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            requrie: true,
            maxlength: 32,
        },
        description: {
            type: String,
            trim: true,
            require: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            require: true,
            maxlength: 32,
        },
        category: {
            type: ObjectId,
            ref: 'Category',
            require: true
        },
        quantity: {
            type: Number,
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);