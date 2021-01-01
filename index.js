const express = require('express'); 
const app = express(); 
app.use(express.json());
const cors = require('cors')
server.use(cors())
const questionsRouter = require('./routes/questions.js');
const entryRouter = require('./routes/auth/entry.js');   
const todoRouter = require('./routes/user/todo/todoRouter.js');
const job = require('./routes/user/todo/populateTodo.js');
const fulfilledRouter = require('./routes/user/fulfilled/fulfilledRouter.js');
const updateQuestionsPerDay = require('./routes/user/preferance/updateQuestionsPerDay.js');
const notesRouter = require('./routes/user/notes/notesRouter.js');
const jobsRouter = require('./routes/user/jobs/jobsRouter.js'); 

job;

app.get('/' , (req,res)=>{
    res.send("hello")
})
// questions routes 
app.use('/questions', questionsRouter);

// user access routes
app.use('/entry', entryRouter); 

// user actions routes below 

// mark a todo or unmark a todo
app.use('/user/todos', todoRouter); 

// mark a question as completed or unmark it 
app.use('/user/completed', fulfilledRouter);

// update amount of questions to send 
app.use('/user/amount', updateQuestionsPerDay);

// taking notes endPoints 
app.use('/user/notes', notesRouter);

// adding jobs 
app.use('/user/jobs', jobsRouter); 

const port = process.env.PORT || 5000; 

app.listen(port , ()=> {
    console.log(`running on ${port}`);
});
