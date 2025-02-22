const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req,res)=>{
    res.json({mssg:'GET a single workout'})
})

// POST a new workout
router.post('/', async(req,res)=>{
    const {title, laod, reps} = req.body


    try {
        const workout= await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg:'POST a new workout'})
})

// Delete a new workout
router.delete('/:id', (req,res)=>{
    res.json({mssg:'DELETE a workout'})
})

// UPDATE  a new workout
router.patch('/:id', (req,res)=>{
    res.json({mssg:'UPDATE a workout'})
})

module.exports = router