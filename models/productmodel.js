const mongoose=require("mongoose")

const ProductModel=new mongoose.Schema({
    product_title:String,
    product_desc:String

})

const Products=mongoose.model("Products",ProductModel);
module.exports=Products