import express from 'express'
import { User } from '../model/userModel.js'
import {connectDB} from '../db/server.js'
const app = express()
connectDB()

app.get('/',(req,res)=>{
    res.send("Hello this is Home Url")
})
app.use(express.urlencoded({ extended: false }))
app.post('/register',(req,res)=>{
    const {name, email, password} = req.body
    console.log(name)
    console.log(email)
    console.log(password)
    let newUser = new User({name,email,password})
    newUser.save()
    console.log(newUser)
})
app.listen(3000,()=>{
    console.log("Server listening on the port 3000")
})