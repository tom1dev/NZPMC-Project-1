import styleSignin from '../styles/Signin.module.css';
import {useState} from 'react';
import signIn from'../services/signinService';
import createUser from '../services/userService';


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
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password || (isSignup && !name)) {
            alert("Please fill out all fields.");
            return;
        }
        try{
            if(isSignup){
                    const data = createUser({name,email,passwordHash: password,isAdmin:false});
                    console.log(data);
                    document.cookie = `token=${data.token}`;


                //handle submition logic with correct service
            }else{
                    const data = signIn(email, password);
                    console.log(data);
                    document.cookie = `token=${data.token}`;
            }
                
        }catch(error){
                console.log(error);
        }



    }

    return(
        <div className={styleSignin.background}>
            <h className={styleSignin.header}>{title}</h>
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