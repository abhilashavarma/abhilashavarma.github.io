const mongoose = require('mongoose');


// Create Reference Schema

const DoubtSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    doubt:{
        type:String,
        required:true
    },

});
const Doubt=mongoose.model('doubt', DoubtSchema);
module.exports = Doubt

