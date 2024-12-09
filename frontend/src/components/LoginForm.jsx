import styleSignin from '../styles/Signin.module.css';
import {useState, useEffect} from 'react';
import signinService from '../services/signInService.js';
import userService  from '../services/userService';
import { useNavigate } from "react-router-dom";


const LoginForm = ({title,isSignup,setIsSignup}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [error,setError] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        //const token = document.cookie.split("=")[1];
        // if(token){
        //     navigate("/");
        // }
        document.body.style.backgroundColor = '#00658C'; // Light color for home page
    }, []);

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password || (isSignup && !name)) {
            alert("Please fill out all fields.");
            return;
        }
        try{
            if(isSignup){
                    const user = {name,email,passwordHash: password,isAdmin:false};
                    const data = await userService.createUser(user);

                    document.cookie = `token=${"Bearer "+data}`;
                    navigate("/");

                //handle submition logic with correct service
            }else{
                    const data = await signinService.signIn(email, password);
                    document.cookie = `token=${"Bearer "+ data}`;
                    navigate("/");

            }
                
        }catch(error){
                setError(true);
                console.log(error);
        }



    }

    return(
        <div className={styleSignin.background}>
            <h className={styleSignin.header}>{title}</h>
            {  
                
                error && <h4 className={styleSignin.error}>{isSignup ? "Account couldn't be created": "Password or email incorrect"}</h4>
                    
               
            }
            <form onSubmit={handleSubmit}>
                
                {isSignup && 
                    <div className={styleSignin.parrameterBox}>
                        <h2>Name</h2> 
                        <input value={name}  onChange={handleNameChange}/>
                    </div>
                }


                <div className={styleSignin.parrameterBox}>
                    <h2>Email</h2>
                    <input value={email}  onChange={handleEmailChange}/>
                </div>
                <div className={styleSignin.parrameterBox}>
                    <h2>Password</h2> 
                    <input value={password}  onChange={handlePasswordChange}/>
                </div>


                {isSignup ?<button type="submit">Sign Up</button>:<button type="submit">Login</button>}
                


            </form>



            <div className={styleSignin.linkBox}>
                    {   isSignup?
                        <><p>Have an account?</p>
                        <p className={styleSignin.signupLink} onClick={onSignupClicked}>  Sign In</p></>:
                        <><p>Don't have an account?</p>
                        <p className={styleSignin.signupLink} onClick={onSignupClicked}>  Sign Up</p></>
                    }
            </div>        
        </div>
    )

}

export default LoginForm;