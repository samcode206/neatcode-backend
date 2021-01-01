const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
{User, Question} = require('../../../db.js');

// add a question to completed list
router.post('/:id', authorize, async (req, res) =>{
      try{
    const {id} = req.params; 
    const username = req.header('username');
    const question = await Question.findOne().where("_id").equals(id);
    const user = await User.findOne().where("username").equals(username);
    user.completedQuestions.push(question);
    user.save((err)=> saveHelper(err));
    res.status(200).json(user.completedQuestions);
    }catch(err){
        res.status(500).json({message: err.message}); 
    }
});

// remove a question from completed list
router.delete('/:id', authorize, async (req, res) =>{
    try{
    const {id} = req.params; 
    const username = req.header('username');
    const user = await User.findOne().where("username").equals(username);
    user.completedQuestions.pull({_id: id});
    user.save(err=>saveHelper(err));
    res.status(201).json(user.completedQuestions);

    } catch(err){
        res.status(500).json({message: err.message}); 
    }

});

const saveHelper = (err)=>{
    if (err) console.log(err);
    console.log('saved!');
};
module.exports = router; 