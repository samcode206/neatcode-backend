const 
express = require('express'),
{Question} = require('../db'),
router = express.Router(),
ObjectId = require('mongodb').ObjectID; 

router.get('/', async (req, res)=>{
    try {
    const questions = await Question.find(req.query)
    res.status(200).json(questions);
    } catch(err){
        res.status(500).json({message : "something went wrong!"})
    }
});

router.get('/:id', async (req, res) => {
  try{  
    const {id} = req.params;
    const question = await Question.find({"_id" : ObjectId(`${id}`)});
    res.status(200).json(question);
    } catch(err){
    res.status(404).json({error: "please enter a proper ID"}); 
    }
});

module.exports = router; 