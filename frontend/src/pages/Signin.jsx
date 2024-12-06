import {useState} from 'react';
import './Signin.css';
import { Outlet, Link } from "react-router-dom";
import LoginForm from '../components/loginForm';

const SignIn = () => {
    const [isSignup,setIsSignup] = useState(false);
    return(
        <>  
            <div className='LinkContainer'><Link className='homeLink' to="/">home</Link></div>    



            { isSignup ?
                <LoginForm title="Sign up" isSignup={isSignup} setIsSignup={setIsSignup}/>:
                <LoginForm title="Login" isSignup={isSignup} setIsSignup={setIsSignup}/>
            }
        </>
    )
}; 

export default SignIn;