const mongoose=require('mongoose')

const schema=mongoose.Schema;

const BrandName= new mongoose.Schema({
    brandname:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('brandname',BrandName)