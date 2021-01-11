const {User} = require('../../../db.js');

module.exports = async (req ,res) => {
    try{
        const body = req.body; 
        const username = req.header('username');
        const user = await User.findOne().where("username").equals(username);
        user.applications.push(body); 
        user.save(err=>saveHelper(err));
        res.status(200).json(user.applications); 

    }catch(err){
        res.status(404).json({message : err.message}); 
    }; 
};

const saveHelper = (err)=>{
    if (err) console.log(err);
    console.log('saved!');
};