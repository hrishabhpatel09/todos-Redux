import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)