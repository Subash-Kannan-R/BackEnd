import mongoose from 'mongoose';

const schemma =  mongoose.Schema({
    productname : String,
    productprice : Number,
    productquantity : Number
})

const productlist = mongoose.model('productlist',schemma);

export default productlist;

