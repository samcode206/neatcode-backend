const {User} = require('../../../db.js');

module.exports = async (req ,res) => {
    try{
        const username = req.header('username');
        const user = await User.findOne().where("username").equals(username);
        res.status(200).json(user.applications); 

    }catch(err){
        res.status(500).json({message : err.message}); 
    }; 
};

