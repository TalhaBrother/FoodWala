import express from "express"
import Rcp from '../schema/schema.js'
const recipeRoutes=express.Router()

recipeRoutes.get("/",(req,res)=>{
    res.send("Fetching All Recipes")
})
recipeRoutes.post("/",async(req,res)=>{
    let rcp=new Rcp(req.body)
    await rcp.save()
    res.send({
        message:"Successful",
        recipe:rcp,
        code:200
    })
})
recipeRoutes.delete("/",(req,res)=>{
    res.send("Deleting All Recipes")
})
export default recipeRoutes