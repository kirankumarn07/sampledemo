const express=require('express')
const mongoose=require('mongoose')
const BrandName=require('./model')
const app=express();
 app.use(express.json())
const PORT=2020
const MONGODB_URl='mongodb+srv://kirankumarnaga7:Nkiran07@cluster0.48dpvqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(MONGODB_URl).then(
    ()=>console.log('mongodb connected successfully')
    ).catch((err)=>console.log(err))
app.get('/kiran',(req,res)=>{
   res.send('<h1>Hello world</h1>')
})

app.post('/addbrandname', async (req,res)=>{
    const{brandname}=req.body;
    try{
         const newData= new BrandName({brandname});
          await newData.save();
         return res.json(await BrandName.find())
    }catch(err){
        console.log(err.message);
    }
})
app.get('/getalldata',async(req,res)=>{
    try{
     const alldata=await BrandName.find();
     return res.json(alldata)
    }catch(err){
     console.log(err.message)
    }
})
app.get('/getalldata/:id',async(req,res)=>{
    try{
       const Data=await BrandName.findById(req.params.id)
       return res.json(Data)
    }catch(err){
        console.log(err.message)
    }
})

app.delete('/deletedata/:id',async(req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id)
        return res.json( await BrandName.find())
    }catch(err){
        console.log(err.message)
    }
})

console.log("API testing");

app.listen(PORT,(req,res)=>{
    console.log(`Databse connected at ${PORT}`)
})