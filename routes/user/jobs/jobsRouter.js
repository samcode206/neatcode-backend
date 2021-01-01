const
express = require('express'),
router = express.Router(),
authorize = require('../../auth/authUtils/auth-mid.js'),
addJob = require('./addJob.js'),
removejob = require('./removeJob.js'),
updateJob = require('./updateJob.js');

// add a job to your list of jobs 
router.post('/', authorize, async (req, res) =>{
    addJob(req, res); 
});

// remove a job from your list of jobs 
router.delete('/:id', authorize, async (req, res) =>{
    removejob(req,res); 
});


// update a job from your list of jobs 
router.put('/:id', authorize, async (req, res) => {
    updateJob(req,res); 
}); 

module.exports = router; 