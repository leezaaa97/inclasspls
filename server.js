//part config 
const port = 3001;
//express config
const exp = require('express');
//config the server application
const app = exp();

app.use(exp.json());
app.use(exp.static('public'));


let name = "";
let batch = "";

app.get('/api',(req,res)=>{
    res.json({message:"HELLO"})
});

app.listen(port,()=>{
    console.log(`server started at port: ${port}`);
});


//app.listen(3001);