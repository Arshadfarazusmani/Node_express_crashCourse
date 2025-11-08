import express from "express"
const app = express()  
const port = 3000;

app.use(express.json()) // configuring app to accept the json data from frontend 

let TeaData=[];
let indexID=1;

app.post('/teas',(req,res)=>{

    const {name, price } =  req.body 
    const newTea={id: indexID++, name, price }
    TeaData.push(newTea)
    res.status(201).send(newTea)
})

app.get('/teas',(req,res)=>{
    res.status(201).send(TeaData)
})

app.get(`/teas/:id`, (req,res)=>{
    const tea = TeaData.find(t => t.id === req.params.id)
    if (!tea) {
        res.status(404).send("Tea not found")
        
    }

    res.status(201).send(tea)
})





//start a server 
app.listen(port,()=>{
    console.log("Server started !!");
    
})

