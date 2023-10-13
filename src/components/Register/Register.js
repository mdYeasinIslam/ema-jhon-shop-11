import React, { useContext } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../Contexts/UserContext';
const Register = () => {
    const {name} =useContext(AuthContext)
    return (
        <div className='form-container'>
            <h1 className='form-header'> Sign Up: {name}</h1>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Password' required />
            </div>
            <div className="form-control">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="password" name="ConfirmPassword" id="password" placeholder='Confirm Password' required />
            </div>
            <div>
                <button className='btn-submit' type="submit">Sign Up</button>
                <p className='register-route'>Already have an Account ? <Link to='/login'>Log In</Link></p>
            </div>
            <div className='divider'>
                <span className='line'></span>
                <span>Or</span>
                <span className='line'></span>
            </div>
        </div>
    );
};

export default Register;