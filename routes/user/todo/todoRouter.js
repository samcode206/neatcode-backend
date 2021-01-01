const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
addToDo = require('./addToDo.js'),
deleteToDo = require('./deleteToDo.js'),
{User} = require('../../../db.js');

// add a question to your list of toDo's 
router.post('/:id', authorize, async (req, res) =>{
    addToDo(req, res); 
});

// delete a todo 
router.delete('/:id', authorize, async (req, res) =>{
   deleteToDo(req, res); 
});

// get todo 
router.get('/', authorize, async (req ,res) => {
     try{
    const username = req.header('username');
    const user = await User.findOne().where("username").equals(username);
    res.status(200).json(user.todo);
    }catch(err){
        res.status(500).json({message: err.message}); 
    }
});

module.exports = router; 
