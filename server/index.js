import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';

import answerRoutes from './routes/Answers.js';

const app=express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
   res.send("This is the StackOverFlow Clone API");
})

app.use('/user',userRoutes);
app.use('/questions',questionRoutes);
app.use('/answer',answerRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL 
// const CONNECTION_URL ="mongodb+srv://admin:admin@stack-overflow-clone.c00vnai.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( DATABASE _URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=>{console.log(`server running at the port ${PORT}`)}))
.catch((err)=>console.log(err.message))



