const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
addNote = require('./addNote.js'),
removeNote = require('./removeNote.js');

// add a note
router.post('/', authorize, async (req, res) =>{
   addNote(req,res);
});

// delete a note 
router.delete('/:id', authorize, async (req, res) =>{
    removeNote(req,res); 
});


module.exports = router; 