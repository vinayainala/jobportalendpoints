import userModel from "../models/userModel.js"

 export const registerController=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name){
            return res.status(200).send({success:false,message:'please enter name'})
        }
        if(!email){
            return res.status(200).send({success:false,message:'please enter email'})
        }
        if(!password){
            return res.status(200).send({success:false,message:'please enter password'})
        }
        const extinguisher=await userModel.findOne({email})
        if(extinguisher){
            return res.status(200).send({
                success:false,
                message:"Email Already Registered"
            })
        }
        const user=await userModel.create({name,email,password})
        res.status(200).send({
            success:true,
            message:"User Creation Successful",
            user
        })


    }catch(error){
        console.log(error)
        res.status(400).send({
            message:"Error in Email is registered",
            success:false,
            error
        })
    }


}
