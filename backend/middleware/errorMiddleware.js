// Middleware are functions that execute during the request/response cycle

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 ;

    res.status(statusCode)
    
    console.log('Using errorHandler:')

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}


module.exports = {
    errorHandler,
}