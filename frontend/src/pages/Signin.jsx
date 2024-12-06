import {useState} from 'react';
import './Signin.css';
import { Form } from 'react-router-dom';

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
        <div className='background'>
            <h className='header'>Login</h>
            <form onSubmit={handleLogin}>
                



                <div className='parrameterBox'>
                    <h2>Email</h2>
                    <input value={email}  onChange={handleEmailChange}/>
                </div>
                <div className='parrameterBox'>
                    <h2>Password</h2> 
                    <input value={password}  onChange={handlePasswordChange}/>
                </div>
                
                <button type="submit">Login</button>


            </form>
            <div className='linkBox'>
                    <p>Don't have an account?</p>
                    <p className='signupLink' onClick={onSignupClicked}>  Sign Up</p>
            </div>        
        </div>
    )
}; 

export default SignIn;