const mongoose = require('mongoose');


// Create Lectures Schema

const LectureSchema = mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    }

});
const videos = mongoose.model('videos', LectureSchema);
module.exports = videos

