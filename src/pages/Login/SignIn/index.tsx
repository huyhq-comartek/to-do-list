/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */

import React from "react";
import { useState } from "react";

interface Props {
    handleSignIn: (account: {
        username: string,
        password: string
    }) => void,
    handleClick: () => void,
}

function SignIn({handleSignIn, handleClick}: Props) {
    // set state input
    const [account, setAccount] = useState({
        username: '',
        password: ''
    })

    // set state validate
    const [validate, setValidate] = useState({
        username: '',
        password: '',
    });

    // handle change
    const handleChangeUser = (e: any) => {
        setAccount(prev => ({...prev, username: e.target.value}));
    }

    const handleChangePass = (e: any) => {
        setAccount(prev => ({...prev, password: e.target.value}));
    }

    // handle submit
    const handleSubmit = (e: any) => {
        // prevent submit form
        e.preventDefault();

        // set value validate to default
        setValidate({
            username: '',
            password: '',
        })

        // check username
        if(account.username === '') {
            setValidate((prev) => ({...prev, username: 'This field can not be empty.'}));
        }

        // check username
        if(account.password === '') {
            setValidate((prev) => ({...prev, password: 'This field can not be empty.'}));
        }

        // check if account is exist
        if(account.username !== '' && account.password !== '') {
            handleSignIn(account);
        }

        return false;
    }
    
    // render 
    return (
        <form 
            className='login__form'
            onSubmit={handleSubmit}
        >
            <h1 className='login__sign-in'>sign in</h1>
            
            <div className='login__input'>
                <label htmlFor="username">username</label>    
                <input 
                    value={account.username} 
                    onChange={handleChangeUser} 
                    type="text" 
                    id='username' 
                    name='username'
                    placeholder="Username"
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
                    placeholder="Password"
                />
                <div className="validate">
                    {validate.password}
                </div>
            </div>

            <button onSubmit={handleSubmit} className='btn__sign-in'>
                Sign In
            </button>

            <div className="mobile-tap">
                Don't have an account yet? &nbsp;
                <span onClick={handleClick}>Tap here</span>
            </div>
        </form>
    )
}

export default SignIn;