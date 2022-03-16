/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { toast } from 'react-toastify';
import React from 'react';

interface Props {
    notify: (text: string, props: {}, type: string) => void
}

export interface IUser {
    username: string;
    password: string
}

function Login({notify}: Props) {
    let navigate = useNavigate();

    // set state
    const [page, setPage] = useState(false);
    const [accounts, setAccounts] = useState(() => {
        const accountStorage = JSON.parse(localStorage.getItem('Accounts') || '');
        return accountStorage ?? [];
    });

    // handle submit 
    const handleSignIn = (account:IUser) => {
        let check = false;
        accounts.forEach((e:any) => {
            const passCheck = e.password === account.password;
            const userCheck = e.username === account.username;
            if(passCheck && userCheck) {
                check = !check;
            }
        });
        if(check) {
            notify('Login successfully', {position: toast.POSITION.TOP_RIGHT}, '');
            navigate('/');
        }
        else notify(
          'Your username or password is not right', 
          {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 3000
          }, 
          'error');
    }

    // handle submit 
    const handleSignUp = (account: {
        username: string,
        password: string
    }) => {
        setAccounts((prev: {
            username: string,
            password: string
        }[]) => {
            const newAccounts = [...prev, account];
            localStorage.setItem('Accounts', JSON.stringify(newAccounts));
            return newAccounts;
        });

        setPage(!page);

        notify(
            'Your account has been successfully created', 
            {
              position: toast.POSITION.TOP_RIGHT, 
              autoClose: 3000
            }, 
            'success');;
    }

    const handleClick = () => {
        setPage(!page);
    }
    
    // render 
    return (
        <div className='login'>
           
            {/* login decorate part  */}
            <div className='login__branch'>
                <span className='ask'>
                    {page ? 'Already have account' : 'Is this your first time to ToDoList?'}
                </span>
                <button 
                    className='to-sign-up'
                    onClick={handleClick}
                >
                    {page ? 'Sign In' : 'Sign Up'}
                </button>
                <img src='https://www.zenesys.com/Zenesys/media/Images/reactJS/reactJS-logo.png'/>
            </div>

            {
                page ?
                    <SignUp 
                        handleSignUp={handleSignUp} 
                        handleClick={handleClick}
                    /> : 
                    <SignIn 
                        handleSignIn={handleSignIn} 
                        handleClick={handleClick}
                    />
            }

        </div>
    )
}

export default Login;
