import mongoose from 'mongoose'
import chalk from 'chalk'
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(chalk.bgRed(`Moongodb Connected`))
    }catch(error){
        console.log(`Mongoose Error ${error}`)
    }
}


export default connectDB;
