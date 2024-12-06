import {useState} from 'react';
import './Signin.css';
import { Form } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const SignIn = () => {
    const [isSignup,setIsSignup] = useState(false);

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        console.log("login submitted")



    }

    const onSignupClicked = () => {
        console.log("Sign up Clicked")
        setIsSignup(true);

    }


    return(
        <LoginForm title="Signup"/>
    )
}; 

export default SignIn;