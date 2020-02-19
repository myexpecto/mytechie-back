

exports.init = (req,res, next) =>{
    console.log("Sa marche ...");

    res.status(200).json({Message : 'BACK INITIALISE'})
}