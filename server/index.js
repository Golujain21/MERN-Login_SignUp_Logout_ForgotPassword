require("dotenv").config()
const express  = require("express")
const app = express();
const Jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;
const cors = require("cors")
const nodemailer =require("nodemailer")

const PORT = process.env.PORT || 5000 ;
require("./db/conn");
const User = require("./model/users")
const Product = require("./model/products")
app.use(express.json());
// const corsOptions ={
//     origin:'*', 
//     credentials:true,      //access-control-allow-credentials:true
//     optionSuccessStatus:200,
// }
app.use(cors()) // Use this after the variable declaration

// email config
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ratnesh.jain@newtechfusion.com",
        pass:"Ratnesh@233"
    }
})

app.post("/register",async (req,res)=>{
    const {name, email ,password} = req.body
    if(!name || !email || password){
        return res.status(422).json({error:"please filled the felid error"})
    }else{
        let user = new User({name, email ,password})
        let result = await user.save();
        result = result.toObject();
        delete result.password; 
        Jwt.sign({result},jwtKey,{expiresIn:"2h"},(error,token)=>{
            if(error){ res.send({result:"something wen wrong ,please try again"})} //send Error
            res.send({result, auth:token}) //send result and token
        })
        // res.send(req.body)
        console.log(result)
    }  
})
app.post("/login",async (req,res)=>{
   if(req.body.email && req.body.password){
    const user = await User.findOne(req.body).select("-password")    
    if(user){
        Jwt.sign({user},jwtKey,{expiresIn:"2h"},(error,token)=>{
           if(error){
              res.send({result:"something wen wrong ,please try again"})
           }
           res.send({user ,auth:token});
        })
    }else{
        res.status(422).send({error:"invalid Detail"})
    }
    console.log(user)
   }else{
    res.status(422).send({error:"invalid user Detail"})
   }
})

app.post("/add-product",async (req ,res)=>{ 
 let product = new Product(req.body)
 let result = await product.save();
 res.send(result);
})

app.get("/products",verifyToken,async(req,res)=>{
    let products = await Product.find()
    // console.log(products)
    if(products.length>0){
        res.send(products);
        // console.log(products)
    }else{
        res.send({result:"No Products Founds"})
    }
})


// reset password api
app.post("/sendpasswordlink", async(req ,res)=>{
    // console.log(req.body)
    const {email} = req.body;
    if(!email){
        res.status(401).send({status:401, error:"Enter your Email"})
    }
    try {
        const userFind = await User.findOne({email:email});
        // console.log("userFind",userFind)
        const token = Jwt.sign({_id:userFind._id},jwtKey,{expiresIn:"120s"})
        // console.log("getToken",token)

        // generate token for reset password
        const setUserToken = await User.findByIdAndUpdate({_id:userFind._id},{verifytoken:token},{new:true}) 
        console.log("setUserToken",setUserToken)

        if(setUserToken){
            const mailOption = {
                from:"ratnesh.jain@newtechfusion.com",
                to:email,
                subject:"Sending email for password reset",
                text:`this link valid for 2 minutes http://localhost:3000/forgot/${userFind._id}/${setUserToken.verifytoken}`
            } 
            transporter.sendMail(mailOption,(error,info)=>{
                if(error){
                    console.log("error",error)
                    res.status(401).json({status:401,message:"email not sent"})
                }else{  
                    console.log("email sent",info.response)
                    res.status(201).json({status:201,message:"email sent successfully"})
                }
            }) 
        }

        
     
    } catch (error) {
        res.status(401).json({status:401,message:"user not found"})
    }

   
})

// verify user for forgot password time
app.get("/forgotpassword/:id/:token", async(req ,res)=>{
    // const params = req.params;
    // console.log(params)
    const {id ,token} = req.params;
    try {
        const validuser = await User.findOne({_id:id,verifytoken:token});
        // console.log(validuser)
        
        // token check expire or not
        const verifytoken = Jwt.verify(token,jwtKey);
        console.log(verifytoken)
        if(validuser && verifytoken._id){
            res.status(201).json({status:201,validuser})                      
        }else{
            res.status(401).json({status:401,message:"user not exist"})                      

        }
 
    } catch (error) {
        res.status(401).json({status:401,error})                      
    }
});
// change password
app.post("/:id/:token",async(req , res)=>{
    const {id ,token} = req.params;
    const {password} = req.body;
    try {
        const validuser = await User.findOne({_id:id,verifytoken:token});
        // console.log(validuser)
        
        // token check expire or not
        const verifytoken = Jwt.verify(token,jwtKey);
        if(validuser && verifytoken._id){
               const newPassword = await User.findByIdAndUpdate({_id:id},{password:password}) 
               newPassword.save();
               res.status(201).json({status:201,newPassword})                      

        }else{
            res.status(401).json({status:401,message:"user not exist"})                      
        }
        
    } catch (error) {
        res.status(401).json({status:401,error})                      
        
    }

})



function verifyToken (req ,res ,next) {
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey ,(error ,valid)=>{
            if(error){
                res.status(401).send({result:"please provide valid token with header"})
                console.log("please provide valid token with header")
           }else{
                next();
           }
        })
      }else{
        res.status(403).send({result:"please add token with header"})
        console.log("please add token with header")
      }
    // console.log("middleware called" ,token)
    // next();
}   





app.listen(PORT , ()=>{
    console.log(`server i running at prot no .${PORT}`)
})

// const start = async () => {
//     try {
//      app.listen(PORT ,()=>{
//          console.log(`server is running at port no:${PORT}`)
//      })
//     } catch (error) {
//      console.log(`port are not connect : ${error}`)
//     }
//  }   
//  start();