const {User} = require('../../../db.js');
module.exports = async (req, res) => {
  try{
    const username = req.header('username');
    const note = req.body.note; 
    const title = req.body.title; 
    const user = await User.findOne().where("username").equals(username);
    user.notes.push({
        title,
        note
    });
    user.save((err)=> saveHelper(err));
    res.status(200).json(user.notes);
    }catch(err){
        res.status(500).json({message: err.message}); 
    }
};

const saveHelper = (err)=>{
    if (err) console.log(err);
    console.log('saved!');
};