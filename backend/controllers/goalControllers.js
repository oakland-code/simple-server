const asyncHandler = require('express-async-handler');

// @description GET goals
// @route GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message:'Its up!'})
})

// @description set goals
// @route POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
    
    if(!req.body.text){
        res.status(400)
        throw new Error('Add text field')
    }
    res.status(200).json({message:'Set Goal!'})
})

// @description update goals
// @route PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Updated Goal ${req.params.id}`})

})


// @description delete goals
// @route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}