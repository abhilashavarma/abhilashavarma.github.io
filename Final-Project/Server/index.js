
const express = require('express');
const path = require('path');
const port = 3001;
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

//Middleware
app.use(express.json());

app.use(cors());

//passport middleware
app.use(passport.initialize());

//Bring Stratergy

require('./config/passport')(passport);

//bring in db config
const db = require('./config/keys').mongoURI
mongoose.connect(db,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
  }).then(() =>{
  console.log(`Database Connected Successfully ${db}`)
}).catch(err =>{
   console.log(`Unable to connect with the database ${err}`)
});

//Users Route
const users = require('./routes/user');
app.use('/users', users);

//Login
// const login = require('./routes/user');
// app.use('/users',login)

//Profile
const profile = require('./routes/user');
app.use('/users',profile)


//Post lecture route
const lectures = require('./routes/upload_lectures');
app.use('/upload', lectures);

//Post doubt route
const doubts = require('./routes/doubt');
app.use('/doubt',doubts);

//Get lecture route
const video = require('./routes/lectures');
app.use('/lecture',video);

//Get doubt route
const doubt = require('./routes/ref');
app.use('/doubts',doubt);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})