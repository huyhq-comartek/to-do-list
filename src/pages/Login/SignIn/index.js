/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */

import { useState } from "react";

function SignIn({handleSignIn}) {

    const [account, setAccount] = useState({
        username: '',
        password: ''
    })

    const handleChangeUser = (e) => {
        setAccount(prev => ({...prev, username: e.target.value}));
    }

    const handleChangePass = (e) => {
        setAccount(prev => ({...prev, password: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn(account);
    }
    
    // render 
    return (
        <>
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
            </div>

            <button onClick={handleSubmit} className='btn__sign-in'>
                Sign In
            </button>
        </>
    )
}

export default SignIn;