const express=require("express")
const collection=require("./mongo")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({exteded:true}))
app.use(cors())
app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async(req,res) => {
    const{email,password}=req.body;
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")

    }
})

app.post("/signup",async(req,res) => {
    const collection=await collection;
    console.log(collection);
    const{email,password}=req.body;
    const data={
        email:email,
        password:password,
        // name:name,
        // category:category
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist");
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")

    }
})
app.listen(8000,()=>{
    console.log("Port connected");
})