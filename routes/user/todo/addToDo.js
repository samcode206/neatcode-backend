const 
{User, Question} = require('../../../db.js');

module.exports = async (req , res)=>{
 try{
    const {id} = req.params; 
    const username = req.header('username');
    const question = await Question.findOne().where("_id").equals(id);
    const user = await User.findOne().where("username").equals(username);
    if (user.todo.map(e=> e._id.toString()).indexOf(id) > -1){
        res.status(400).json({message : "item already exists no need to add it again!"});
        return; 
    }
    user.todo.push(question);
    user.save((err)=> saveHelper(err));
    res.status(200).json(user.todo);
    }catch(err){
        res.status(500).json({message: err.message}); 
    }
}
const saveHelper = (err)=>{
    if (err) console.log(err);
    console.log('saved!');
};