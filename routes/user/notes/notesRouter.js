const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
addNote = require('./addNote.js'),
removeNote = require('./removeNote.js'),
 {User} = require('../../../db.js');
// get note 
router.get('/', authorize, async (req, res)=>{
      try{
    const username = req.header('username');
    const user = await User.findOne().where("username").equals(username);
    res.status(200).json(user.notes);
    }catch(err){
        res.status(500).json({message: err.message}); 
    };
});

// update note 
router.put('/:id', authorize, async (req,res) => {
    try {
        const {id} = req.params; 
        const note = req.body.note; 
        const title = req.body.title; 
        const username = req.header('username');
        const user = await User.findOne().where('username').equals(username); 
        if (note && title){
            user.notes.pull({_id:id});
            user.notes.push({
                _id : id,
                title,
                note
            });
            user.save(err=>{
                if (err) console.log(err);
                console.log('saved'); 
            });
            res.status(200).json(user.notes)
        }
        
    } catch(err) {
          res.status(404).json({message : err.message}); 
    }
}); 

// add a note
router.post('/', authorize, async (req, res) =>{

   addNote(req,res);
});


// delete a note 
router.delete('/:id', authorize, async (req, res) =>{
    removeNote(req,res); 
});


module.exports = router; 
