const express = require('express');
const router = express.Router();
const path = require('path');
const videos = require('../Models/Upload_lectures');

const app = express();

app.use(express.json());

router.get('/video',(req,res)=>{
    videos.find({})
    .then(lectures => {
        return res.json(lectures);
    });
});


module.exports= router;