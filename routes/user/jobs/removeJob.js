const {User} = require('../../../db.js');

module.exports = async (req ,res) => {
    try{ 
        const {id} = req.params; 
        const username = req.header('username');
        const user = await User.findOne().where("username").equals(username);
        user.applications.pull({_id: id});
        user.save(err => saveHelper(err)); 
        res.status(201).json(user.applications); 

    }catch(err){
        res.status(404).json({message : err.message}); 
    }; 
};

const saveHelper = (err)=>{
    if (err) console.log(err);
    console.log('saved!');
};