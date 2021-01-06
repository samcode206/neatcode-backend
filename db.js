const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:hadiSA@345318@cluster0.3frpe.mongodb.net/business?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
});

const db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=>{
    console.log('connection success!'); 
});

const questionSchema = new mongoose.Schema({
    question: {type: String, required : true}, 
    category: {type: String , required : true},  
    difficulty : {type : String, required : true},
    link : {type : String, required: true}
});

const notesSchema = new mongoose.Schema({
    title : String,
    note : String
});

const completedQuestionsScema = new mongoose.Schema({
    question : {type : String, required : true},
    category : {type: String, required: true},
    difficulty : {type : String, required : true},
    link : {type: String, required: true},
    lessons : {type : String, requied : true}
});

const applicationsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    stage: {type: String, required : true, default: 0}
});

const userSchema = new mongoose.Schema({
    username: {type : String, required : true, unique : true, dropDups: true}, 
    password : {type : String, required : true}, 
    admin : {type : Boolean, default: false}, 
    email : {type: String, required : true, unique : true, dropDups: true},
    applications : {type : [applicationsSchema], default : [ ]},
    todo : {type: [questionSchema], default: []},
    completedQuestions : {type : [completedQuestionsScema], default: []},
    questionsPerDay : {type: Number, default : 3},
    notes : {type: [notesSchema] , default: []}
});

userSchema.index({
    username : 1
}, {unique : true}); 

const Question = mongoose.model('question', questionSchema); 

const User = mongoose.model('user' , userSchema); 

module.exports = {
    Question, 
    User
};