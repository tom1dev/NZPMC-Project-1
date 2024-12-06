import '../pages/Signin.css';
import {useState} from 'react';

const LoginForm = ({title,isSignup,setIsSignup}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');


    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }


    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }



    const onSignupClicked = () => {
        console.log("Sign up Clicked")
        setIsSignup(!isSignup);

    }
    const handleSubmit = () => {
        
    }

    return(
        <div className='background'>
            <h className='header'>{title}</h>
            <form onSubmit={handleSubmit}>
                
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