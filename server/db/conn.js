// const mongoose = require("mongoose")
// // mongoose.set('strictQuery', false);
// mongoose.connect(process.env.SERVER_KEY,{
//  useNewUrlParser:true,
//  useUnifiedTopology:true,
// }).then(()=>{
//    console.log("connection successful");
// }).catch((e)=>{
//         console.log(`No Connection ${e}`);
// })

const mongoose =require("mongoose")
const uri = process.env.SERVER_KEY;
mongoose.connect(uri,{
    useNewUrlParser :true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successfully")
}).catch((error)=>{
    console.log(`NO connection ${error}`)
})