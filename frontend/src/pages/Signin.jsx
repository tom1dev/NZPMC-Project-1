import {useState} from 'react';
import './Signin.css';
import { Form } from 'react-router-dom';
import LoginForm from '../components/loginForm';

const SignIn = () => {
    const [isSignup,setIsSignup] = useState(false);
    return(
        <>
            { isSignup ?
                <LoginForm title="Login" isSignup={isSignup} setIsSignup={setIsSignup}/>:
                <LoginForm title="Signup" isSignup={isSignup} setIsSignup={setIsSignup}/>
            }
        </>
        
        
       
    )
}; 

export default SignIn;