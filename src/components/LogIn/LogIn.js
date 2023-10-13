import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const LogIn = () => {
    return (
        <div className='form-container'>
            <h1 className='form-header'> Login:</h1>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='email' required />
            </div>
            <div>
                <button className='btn-submit' type="submit">Login</button>
                <p className='register-route'>New to Ema-jhon?? <Link to='/register'>Create a New Account</Link></p>
            </div>
            <div className='divider'>
                <span className='line'></span>
                <span>Or</span>
                <span className='line'></span>
            </div>
        </div>
    );
};

export default LogIn;