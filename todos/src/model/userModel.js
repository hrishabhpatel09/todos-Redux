import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatarUrl:{
        type: String, //From Cloudinary,
    }
})


userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
userSchema.methods.isPasswordCorrect = async (password) =>{
    await bcrypt.compare(password,this.password).then((result)=>{
        return result
    })
}
export const User = mongoose.model("User",userSchema)

