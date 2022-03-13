/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { toast } from 'react-toastify';

function Login({notify}) {
    let navigate = useNavigate();

    // set state
    const [page, setPage] = useState(false);
    const [accounts, setAccounts] = useState(() => {
        const accountStorage = JSON.parse(localStorage.getItem('Accounts'));
        return accountStorage ?? [];
    });

    const [notCorrectAccount, setNotCorrectAcc] = useState(false);

    // handle submit 
    const handleSignIn = (account) => {
        let check = false;
        accounts.forEach(e => {
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
    const handleSignUp = (account) => {
        setAccounts((prev) => {
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

            {/* login || signUp  form*/}
            {
                page ?
                    <SignUp 
                        handleSignUp={handleSignUp} 
                        handleClick={handleClick}
                    /> : 
                    <SignIn 
                        handleSignIn={handleSignIn} 
                        handleClick={handleClick}
                        notCorrectAccount={notCorrectAccount}
                    />
            }

        </div>
    )
}

export default Login;
