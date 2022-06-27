const asyncHandler = require('express-async-handler');

// importing goal model into controller 
const Goal = require('../models/goalModel');


// @description GET goals
// @route GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    
    // Variable that retreives goals from database via mongoose model
    // this is an asynchronous variable
    // can also pass in objects to retreive data
    const goals = await Goal.find();
    


    res.status(200).json(goals)
})

// @description set goals
// @route POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
    
    if(!req.body.text){
        res.status(400)
        throw new Error('Add text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    console.log(`This is the text from request body paramaters: "${req.body.text}" `)
    res.status(200).json(goal)
})

// @description update goals
// @route PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    
   
    if(!goal){
        res.status(400)
        throw new Error('Not able to find Goal by ID!!..')
    }

        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true,})

    res.status(200).json(updatedGoal)
   
})


// @description delete goals
// @route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    
   
    if(!goal){
        res.status(400)
        throw new Error('Not able to find Goal by ID!!..')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}