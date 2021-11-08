const express = require('express');
const router =  express.Router();

const Doubt = require('../Models/Doubts');

const app = express();

app.use(express.json());


router.post('/ref',(req,res)=>{
    const username = req.body.username;
    const doubt = req.body.doubt;
    let newDoubt = new Doubt({
        username,
        doubt

    }) 
    
    newDoubt.save().then(doubt=>{
        return res.status(201).json({
            success:true,
            message:"Saved",
            doubt
        })
    })
})


module.exports= router;