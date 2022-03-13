/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import './style.css';
import React, { useState } from 'react';

function SignUp({handleSignUp, handleClick}) {

    // set State input
    const [account, setAccount] = useState(
        {
            username: '',
            password: '',
        }
    );

    const [confirm, setConfirm] = useState('');

    // set state validate
    const [validate, setValidate] = useState({
        username: '',
        password: '',
        confirm: ''
    });

    // change change
    const handleChangeUser = (e) => {
        setAccount(prev => ({...prev, username: e.target.value}))
    }

    const handleChangePass = (e) => {
        setAccount(prev => ({...prev, password: e.target.value}))
    }

    const handleChangeCoPass = (e) => {
        setConfirm(e.target.value)
    }

    // handle submit
    const handleSubmit = (e) => {
        // prevent submit form
        e.preventDefault();

        // set value validate to default 
        setValidate({
            username: '',
            password: '',
            confirm: ''
        });

        // check username
        if(account.username === '') {
            setValidate((prev) => ({...prev, username: 'This field can not be empty.'}));
        }

        // check password
        if(account.password === '') {
            setValidate((prev) => ({...prev, password: 'This field can not be empty.'}));
        }

        // check confirm password
        if(account.password === confirm && confirm !== '') {
            handleSignUp(account);
        }
        else setValidate((prev) => ({...prev, confirm: 'Passwords does not match.'}));

        return false;
    }
    
    // render 
    return (
        <form 
            className='login__form'
            onSubmit={handleSubmit}
        >
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
                <div className="validate">
                    {validate.username}
                </div>
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
                <div className="validate">
                    {validate.password}
                </div>
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
                <div className="validate">
                    {validate.confirm}
                </div>
            </div>

            {/* <ToastContainer /> */}

            <button onSubmit={handleSubmit} className='btn__sign-in'>
                Sign Up
            </button>

            <div className="mobile-tap">
                Already have an account. &nbsp;
                <span onClick={handleClick}>Tap here</span>
            </div>
        </form>
    )
}

export default SignUp;