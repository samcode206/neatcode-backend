const schedule = require('node-schedule'),
{User , Question} = require('../../../db.js'); 

module.exports = schedule.scheduleJob(`30 3 * * *`, ()=>{
    addToDos()
});


const addToDos = async () => {
    const questions = await Question.find(); 
    const users = await User.find();
    for (user of users){
        addUserToDos(user, questions);
    };
};



const addUserToDos = async (user, questions)=>{
    const todos = user.todo;
    const completedQuestionsforUser = user.completedQuestions; 
    const questionsBankLength = questions.length; 
    let length = user.todo.length; 
    let questionsLength = user.questionsPerDay; 
    let remainderQuestions = questionsLength - length
    if (completedQuestionsforUser.length === questionsBankLength ||
        questionsLength - completedQuestionsforUser.length < remainderQuestions
    ) return; 
    while(length < questionsLength){
        let currentQuestion = questions[Math.floor(Math.random() * questionsBankLength)]; 
        if (completedQuestionsforUser.includes({_id: currentQuestion._id})){
            continue; 
        } else {
            todos.push(currentQuestion); 
            length+= 1; 
        };
    }
    user.save((e)=> saveHelper(e)); 
}; 
const saveHelper = (err)=>{
    if (err) console.log(err);
    console.log('saved!');
};
