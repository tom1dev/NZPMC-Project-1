import '../pages/Signin.css';
import {useState} from 'react';

const LoginForm = ({title}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [isSignup,setIsSignup] = useState(false);

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handleNameChange = (event) =>{
        setName(event.target.value)
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
        setIsSignup(!isSignup);

    }


    return(
        <div className='background'>
            <h className='header'>{title}</h>
            <form onSubmit={handleLogin}>
                
                {isSignup && 
                    <div className='parrameterBox'>
                        <h2>Name</h2> 
                        <input value={name}  onChange={handleNameChange}/>
                    </div>
                }


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

}

export default LoginForm;