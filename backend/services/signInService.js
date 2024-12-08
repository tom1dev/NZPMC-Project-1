const User = require('../models/userModel');
const { createHash } = require('crypto');

const hashPassword = (password) => {
    return createHash('sha256').update(password).digest('hex');

}

const signInService = async (email, password) => {
    try{
        const passwordHash = await User.find({email: email}).catch(err => {return false;});
        if(!passwordHash && passwordHash.length === 0){
            return false;
        }



        if(passwordHash[0].passwordHash === hashPassword(password)){
            return true;
        }
            
        return false;
        
    }catch (error){
        console.log(error);
        return false;
    }
}


module.exports = {signInService, hashPassword}
