import mongoose from 'mongoose'
// import config from '../config/config.js'

export const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log("DB Connected Successfully!")
    } catch (error) {
        console.log(error)
    }
}