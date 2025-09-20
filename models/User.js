import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{ type : String, required : true },
    name: {type : String, required : true },
    email: {type : String, required : true, unique : true },
    imageUrl : { type : String, required : true },
    cartItems: { type : Object, default : {} }
}, { minimize: false })

const User = mongoose.models.user ||  mongoose.model('user',userSchema) // if a model is not present then user model will be used else model will be created using userschema

export default User