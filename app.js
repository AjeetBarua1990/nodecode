const express = require('express');
const app = express('');

app.listen(3000,() =>{})
 console.log("Ok api is working");
;

app.get('/',(req,res)=>{
    res.send("Welcome to the home page of mean project");
})