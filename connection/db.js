const mongoose=require("mongoose")
const mongourl="mongodb+srv://payalyadav2448_db_user:m7G98MOAO48WHZyc@cluster1.5hqvmlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

mongoose.connect(mongourl,{

}).then(()=>{
    console.log("Success");
}).catch(()=>{
    console.log("Not Success");
})