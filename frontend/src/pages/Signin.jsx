import {useState} from 'react';
import styleSignin from './Signin.module.css';
import { Outlet, Link } from "react-router-dom";
import LoginForm from '../components/loginForm';

const SignIn = () => {
    const [isSignup,setIsSignup] = useState(false);
    return(
        <>  
            <div className={styleSignin.LinkContainer}><Link className={styleSignin.homeLink} to="/">home</Link></div>    



            { isSignup ?
                <LoginForm title="Sign up" isSignup={isSignup} setIsSignup={setIsSignup}/>:
                <LoginForm title="Login" isSignup={isSignup} setIsSignup={setIsSignup}/>
            }
        </>
    )
}; 

export default SignIn;