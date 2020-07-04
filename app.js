const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
// import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

// create routes
//post to send, delete to delete, get to fetch stuff from DB, patch updates a post
app.get('/',(req,res)=>{
    res.send('we are on home');
});
// connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true},() => console.log ('connect to DB!'))

// listening to server
app.listen(3001);


