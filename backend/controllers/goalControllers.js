// @description GET goals
// @route GET /api/goals
const getGoals = (req, res) => {
    res.status(200).json({message:'Its up!'})
}

// @description set goals
// @route POST /api/goals
const setGoal = (req, res) => {
    res.status(200).json({message:'Set Goal!'})
}

// @description update goals
// @route PUT /api/goals/:id
const updateGoal = (req, res) => {
    res.status(200).json({message:`Updated Goal ${req.params.id}`})

}


// @description delete goals
// @route DELETE /api/goals/:id
const deleteGoal = (req, res) => {
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}