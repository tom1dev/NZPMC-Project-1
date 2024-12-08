const User = require('../models/userModel');
const { createHash } = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
            return generateToken(email);
        }
            
        return null;
        
    }catch (error){
        console.log(error);
        return null;
    }
}

const generateToken = (email) => {
    const payload = {
        email: email
      };


    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}



const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    console.log(authHeader)
  
    if (token == null){
        return res.sendStatus(401)
    } 
  
    jwt.verify(token, process.env.JWT_SECRET, (error,decoded) => {

      if (error){
        console.log(error)
        return res.sendStatus(403)
      } 
      
      req.user = decoded

      next()
    })
  }


module.exports = {signInService, hashPassword,generateToken,authenticateToken}
