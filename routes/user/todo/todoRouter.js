const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
addToDo = require('./addToDo.js'),
deleteToDo = require('./deleteToDo.js');

// add a question to your list of toDo's 
router.post('/:id', authorize, async (req, res) =>{
    addToDo(req, res); 
});

// delete a todo 
router.delete('/:id', authorize, async (req, res) =>{
   deleteToDo(req, res); 
});


module.exports = router; 