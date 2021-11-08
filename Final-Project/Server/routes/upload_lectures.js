const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const path = require('path');
const {urlencoded} = require('express')
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;

const videos = require('../Models/Upload_lectures');

const app = express();

app.use(express.json());

// const filefilter = function(req,file,cb){
//     cb(null,true);
// }

//Aws credentials
const s3 = new aws.S3({ 
    apiVersion: '2006-03-01' ,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
// Needs AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
//store in Aws
//middleware
const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'streamuploadedvideos',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`);
        }
    })
});

app.use(urlencoded({ extended: true }));

router.post('/video',upload.single('file'),(req,res)=>{

    let newvideos = new videos({
        name:req.body.name,
        description:req.body.description,
        videoUrl:req.file.location
    })
    newvideos.save().then(lect=>{
        return res.status(201).json({
            success:true,
            message:"Uploaded!",
        })
    })

});


module.exports= router;