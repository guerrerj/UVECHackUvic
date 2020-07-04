const mongoose = require ('mongoose');

const PostSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    task: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true
     },
    creator:{
        type: String,
        required: true
     },
     priority:
     {
         type: Number,
         default:0
     },
     currentcategory:{
        type: String,
        required: true
     },
     assignee:{
        type: String,
        required: true
     },
     estimationTime: {
        type: Number,
        required: true
    
     }



});
module.exports = mongoose.model('Posts',PostSchema)