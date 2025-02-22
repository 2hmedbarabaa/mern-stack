require('dotenv').config

const express= require('express')

const mongoose =require('mongoose')

const workoutRoutes = require('./routes/workouts')


//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
    
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

const port = process.env.PORT || 4000;

