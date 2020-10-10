const express = require('express');
const app = express();
app.use((req,res)=> res.send("helloWorld!!!"));


const port = 3000;
app.listen(port,()=>{
    console.log(`Running Server ... http://localhost:${port} `);
})