const 
{User} = require('../../../db.js'),
bcryptjs = require('bcryptjs'),
makeJWT = require('./makeJWT.js');

module.exports = async (req , res)=>{
     const {username , password} = req.body; 
    if (!username || !password) res.status(401).json({message: "please enter username and password"}); 
    const user = await User.find().where('username').equals(username); 
    if (user.length && user[0].password  && bcryptjs.compareSync(password, user[0].password)){
        const token = makeJWT(user); 
        res.status(200).json({token, username : user[0].username}); 
    } else {
        res.status(401).json({message: 'invalid credentials!'}); 
    }
};