import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirectUrl);
        })
    }

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
                onClick={handleGoogleLogin}
                className="btn-regular"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;