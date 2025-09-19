const express = require("express");
const cors = require("cors")

const bodyParser = require("body-parser");
require("./connection/db")
const myserver = express()
myserver.use(express.json())
const port = 8000;

myserver.use(bodyParser.json())

myserver.use(cors(origin = "*"));

const user = require("./Routes/product")

myserver.use("/user",user)

// myserver.get("/", (req, res) => {
//     res.send(
//         [
//             {
//                 "id": 1,
//                 "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//                 "price": 109.95,
//                 "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//                 "category": "men's clothing",
//                 "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//                 "rating": {
//                     "rate": 3.9,
//                     "count": 120
//                 }
//             },


//             {
//                 "id": 2,
//                 "title": "Mens Casual Premium Slim Fit T-Shirts ",
//                 "price": 22.3,
//                 "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//                 "category": "men's clothing",
//                 "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
//                 "rating": {
//                     "rate": 4.1,
//                     "count": 259
//                 }
//             }
//         ]

//     )
// })



// myserver.get("/allusers/:id",async(req,res)=>{
//     const id=req.params.id
//     const users=await Userss.findById(id)
//     res.json({
//         "user":users
//     })
// })
// myserver.get("/allusers/:id",async(req,res)=>{
//     const name=req.params.username
//     const users=await Userss.findOne(name)
//     req.json({
//         "users":users
//     })
// })

// myserver.delete("/allusers/:id",async(req,res)=>{
//     const id=req.params.id
//     const del=await Userss.findByIdAndDelete(id)
//     if(del){
//         res.status(200).json({
//             message:"data deleted"
//         })
//     }
// })


myserver.listen(port, (req, res) => {
    console.log("Server Started")
})