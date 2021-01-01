const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
{User} = require('../../../db.js');

// change the preferance for amount of questions to recieve per day
router.patch('/', authorize, async (req, res) =>{
    try {
    const username = req.header('username');
    const newAmount = req.body.amount;  
    await User.findOne({
        username : username
    }, 
    (err, doc)=>{
        if (err) res.status(404).json({message: err})
        if (doc !== null){
         doc.questionsPerDay = newAmount; 
         doc.save(); 
         res.status(201).json({
        success : "updated",
        newAmount : doc.questionsPerDay
        });
        } else {
            res.status(404).json({message : 'please provide proper username'})
        }
    })
    }
    catch (err){
        res.status(404).json({message: err})
    }
});


module.exports = router; 