//var express=require('express')
import express from 'express'
import dotenv from  'dotenv'
import  connectDB from './config/db.js';
import chalk from 'chalk'
/*import testRoutes from './routes/testRoutes.js';*/
import authRoutes from './routes/authRoutes.js';
dotenv.config()

connectDB()

var app=express()

app.get('/',(req,res)=>{
   res.send('Hello World')
})
app.use(express.json())

/*app.use('/api/v1/test',testRoutes)*/
app.use('/api/v1/auth',authRoutes)

app.listen(5050,(req,res)=>{
    console.log(chalk.bgGreenBright.whiteBright('Server Running'))
})
