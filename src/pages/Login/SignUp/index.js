/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import './style.css';
import React, { useState } from 'react';

function SignUp({handleSignUp}) {

    const [account, setAccount] = useState(
        {
            username: '',
            password: '',
        }
    );
    const [confirm, setConfirm] = useState('');

    const handleChangeUser = (e) => {
        setAccount(prev => ({...prev, username: e.target.value}))
    }

    const handleChangePass = (e) => {
        setAccount(prev => ({...prev, password: e.target.value}))
    }

    const handleChangeCoPass = (e) => {
        setConfirm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(account.password === confirm) {
            handleSignUp(account);
        }
        else alert('So sanh mat khau khong trung khop');
        return false;
    }
    
    // render 
    return (
        <>
            <h1 className='login__sign-in'>sign Up</h1>
            
            <div className='login__input'>
                <label htmlFor="username">username</label>    
                <input 
                    value={account.username} 
                    onChange={handleChangeUser} 
                    type="text" 
                    id='username' 
                    name='username'
                    placeholder='Username'
                />
            </div>

            <div className='login__input'>
                <label htmlFor="password">password</label>    
                <input 
                    value={account.password} 
                    onChange={handleChangePass} 
                    type="password" 
                    id='password' 
                    name='password'
                    placeholder='Password'
                />
            </div>

            <div className='login__input'>
                <label htmlFor="confirmPassword">Confirm password</label>    
                <input 
                    value={confirm} 
                    onChange={handleChangeCoPass} 
                    type="password" 
                    id='confirmPassword' 
                    name='password'
                    placeholder='Confirm Password'
                />
            </div>

            <button onClick={handleSubmit} className='btn__sign-in'>
                Sign Up
            </button>
        </>
    )
}

export default SignUp;