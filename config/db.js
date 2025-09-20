import mongoose from "mongoose";

let cached = global.mongoose

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() { // created a function which will help in estabishing connection with mongoDB database

    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands:false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then( mongoose => {
        return mongoose
        })

    }

    cached.conn = await cached.promise
    return cached.conn

}

export default connectDB