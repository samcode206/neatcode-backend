const express = require('express'); 
const app = express(); 
require('dotenv').config();
const cors = require('cors');
const helmet = require("helmet");
app.use(express.json());
const questionsRouter = require('./routes/questions.js');
const entryRouter = require('./routes/auth/entry.js');   
const todoRouter = require('./routes/user/todo/todoRouter.js');
const job = require('./routes/user/todo/populateTodo.js');
const fulfilledRouter = require('./routes/user/fulfilled/fulfilledRouter.js');
const updateQuestionsPerDay = require('./routes/user/preferance/updateQuestionsPerDay.js');
const notesRouter = require('./routes/user/notes/notesRouter.js');
const jobsRouter = require('./routes/user/jobs/jobsRouter.js'); 
app.use(helmet);
app.use(cors);
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

// const express = require('express'); 
// const app = express(); 
// app.use(express.json());
// const questionsRouter = require('./routes/questions.js');
// const entryRouter = require('./routes/auth/entry.js');   
// const todoRouter = require('./routes/user/todo/todoRouter.js');
// const job = require('./routes/user/todo/populateTodo.js');
// const fulfilledRouter = require('./routes/user/fulfilled/fulfilledRouter.js');
// const updateQuestionsPerDay = require('./routes/user/preferance/updateQuestionsPerDay.js');
// const notesRouter = require('./routes/user/notes/notesRouter.js');
// const jobsRouter = require('./routes/user/jobs/jobsRouter.js'); 
// job;

// const cors = (req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     next();
// }

// app.get('/',(req,res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.send('<h1>welcome in </h1>')
// })
// // questions routes 
// app.use('/questions',cors,  questionsRouter);

// // user access routes
// app.use('/entry',cors, entryRouter); 

// // user actions routes below 

// // mark a todo or unmark a todo
// app.use('/user/todos',cors, todoRouter); 

// // mark a question as completed or unmark it 
// app.use('/user/completed',cors, fulfilledRouter);

// // update amount of questions to send 
// app.use('/user/amount',cors, updateQuestionsPerDay);

// // taking notes endPoints 
// app.use('/user/notes',cors, notesRouter);

// // adding jobs 
// app.use('/user/jobs',cors, jobsRouter); 

// const port = process.env.PORT || 5000; 

// app.listen(port , ()=> {
//     console.log(`running on ${port}`);
// });
// const express = require('express'); 
// const app = express(); 
// app.use(express.json());
// const questionsRouter = require('./routes/questions.js');
// const entryRouter = require('./routes/auth/entry.js');   
// const todoRouter = require('./routes/user/todo/todoRouter.js');
// const job = require('./routes/user/todo/populateTodo.js');
// const fulfilledRouter = require('./routes/user/fulfilled/fulfilledRouter.js');
// const updateQuestionsPerDay = require('./routes/user/preferance/updateQuestionsPerDay.js');
// const notesRouter = require('./routes/user/notes/notesRouter.js');
// const jobsRouter = require('./routes/user/jobs/jobsRouter.js'); 
// job;

// app.get('/' , (req,res)=>{
//     res.send("hello")
// })
// // questions routes 
// app.use('/questions', questionsRouter);

// // user access routes
// app.use('/entry', entryRouter); 

// // user actions routes below 

// // mark a todo or unmark a todo
// app.use('/user/todos', todoRouter); 

// // mark a question as completed or unmark it 
// app.use('/user/completed', fulfilledRouter);

// // update amount of questions to send 
// app.use('/user/amount', updateQuestionsPerDay);

// // taking notes endPoints 
// app.use('/user/notes', notesRouter);

// // adding jobs 
// app.use('/user/jobs', jobsRouter); 

// const port = process.env.PORT || 5000; 

// app.listen(port , ()=> {
//     console.log(`running on ${port}`);
// });
