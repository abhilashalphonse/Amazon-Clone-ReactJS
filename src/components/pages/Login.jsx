import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';
import "./Login.css";

function Login () {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // To Prevent Page Refresh //
        // login logic //
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message));
    }
    const register = event => {
        event.preventDefault(); // To Prevent Page Refresh //
        // login logic //
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //create user and logged in 
        })
        .catch((e) => alert (e.message));
    }
        return (
             <div className="login">
                 <Link to="/">
                     <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                 </Link>
                 <div className="login__wrapper">
                     <h1>Sign In</h1>
                     <form>
                     <h5>E-Mail</h5>
                     <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                     <h5>Password</h5>
                     <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                     <button type="submit" className="login__loginButton" onClick={login}>Sign In</button>
                     </form>
                     <p> 
                     By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                     </p>
                     <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
                 </div>
             </div>
        );   
    
}

export default Login;