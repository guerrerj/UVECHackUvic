const express = require ('express');

const router = express.Router();

const Posts = require('../models/Post');
const Post = require('../models/Post');

router.get('/',async (req, res) => {
    try{
        const posts = await Post.find(); // you can do .limit to return only a certain # of posts
    }catch(err){
        res.json({message:err})
    }
});

router.post('/',async(req,res)=>{
    const post = new Post({
        id: req.body.id,
        task: req.body.task,
        description:req.body.description,
        creator: req.body.creator,
        priority: req.body.priority,
        currentcategory: req.body.currentcategory,
        assignee: req.body.assignee,
        estimationTime: req.body.estimationTime,
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message:err})
    }    
});

// Specific Post - use this to find a specific post
router.get('/postId',async(req,res)=>{
    try{
  const post = await  Post.findById(req.param.postId);
  res.json(post);
    }catch(err){
        res.json({message:err})
    }
});

// delete post
router.delete ('/:postId',async (req,res)=>{
    try{
   const removedPost = await Post.remove({_id:req.param.postId})
   res.json(removedPost);
    }catch(err){
        res.json({message:err})
    }
});
//update a post
router.patch('/:postId',async (req,res) =>{

try{
   const updatedPost = await Post.updateOne({_id:req.param.postId},{$set:{task: req.body.task,
    description:req.body.description,
    creator: req.body.creator,
    priority: req.body.priority,
    currentcategory: req.body.currentcategory,
    assignee: req.body.assignee,
    estimationTime: req.body.estimationTime}});

   res.json(updatedPost);
    }catch(err){
        res.json({message:err})
    }
    
});

module.exports = router;