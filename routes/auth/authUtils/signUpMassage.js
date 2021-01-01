const signupMassage = (info) => {
    return {
        ...info, 
        questionsPerDay : 3,
        todo : [], 
        avoidCategory : [], 
        avoidCategory : [], 
        notes : []
    }
};

module.exports = signupMassage

