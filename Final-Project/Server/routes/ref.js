const express = require('express');
const router =  express.Router();

const Doubt = require('../Models/Doubts');

const app = express();

app.use(express.json());

router.get('/reference',(req,res)=>{
    Doubt.find({})
    
    .then(doubts =>{
        return res.json(doubts)
    });
});


module.exports= router;