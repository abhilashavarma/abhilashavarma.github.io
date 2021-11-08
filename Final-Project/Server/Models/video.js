const mongoose = require('mongoose');
const schema = mongoose.Schema;


const lectureSchema = new schema(
    {
        id : Number,
        name:String,
        description:String,
        videoUrl: String,
    
    },
    {
        timestamps:true,
    },
);

const lect = mongoose.model('lect',lectureSchema);



module.exports = lect;