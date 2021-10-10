import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user, signInUsingGoogle} = useFirebase();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="pssword" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john <NavLink to="/register">Create account</NavLink></p>
                <div>-----------or-----------</div>
                <button 
                onClick={signInUsingGoogle}
                className="btn-regular"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;