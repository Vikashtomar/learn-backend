 import express, { urlencoded } from 'express'
 import cors from 'cors'
 import bcrypt from 'bcrypt'

 const app = express()

 app.use(express.json())

 app.use(urlencoded({extended: true}));
 app.use(cors({origin: "http://localhost:5173"}));

 let data ={
    username: '',
    password: '',
 }
 app.post("/sendData",async(req,res)=>{
    let {name,password} = req.body;
    console.log(name)
    
    let hashedPassword = await bcrypt.hash(password, 10)

    data.username = name
    data.password = hashedPassword

    res.send("every thing is good")
 })

 app.post("/login", async(req,res)=>{
    const {name,password} = req.body;
    const checkPassword = await bcrypt.compare(password, data.password)


    if(checkPassword){
        console.log("password is matched")
        res.send("password is matched")
    }

    else {
        res.send("not matched")
    }
 })

app.listen(8080, ()=>{
    console.log("listining on port 8080")
})