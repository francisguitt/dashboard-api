import express from 'express';
const app = express();

import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());

import { routes } from './routes/index.js';
app.use(routes);
app.use(express.json());

app.use('*',(req,res)=>{
    res.status(404).json({error:"Page not found !"})
})

app.listen(`${process.env.PORT}`, () => {
    console.log(`Running on port ${process.env.PORT}`)
})