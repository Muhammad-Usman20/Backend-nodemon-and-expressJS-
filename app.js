import express from "express"
// const app = express()
// app.listen(5000, () => {
//     console.log("Server Running")
// })


const app = express()
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("Server Run")
})
app.listen(5000, ()=>{
    console.log("Hello")
})

