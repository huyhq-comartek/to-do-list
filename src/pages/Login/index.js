/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login() {
    let navigate = useNavigate();

    // set state
    const [page, setPage] = useState(false);
    const [accounts, setAccounts] = useState(() => {
        const accountStorage = JSON.parse(localStorage.getItem('Accounts'));
        return accountStorage ?? [];
    });

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
            navigate('to-do-list');
        }
        else alert('Ten dang nhap hoac Mat khau khong dung!');
    }

    // handle submit 
    const handleSignUp = (account) => {
        setAccounts((prev) => {
            const newAccounts = [...prev, account];
            localStorage.setItem('Accounts', JSON.stringify(newAccounts));
            return newAccounts;
        });
        setPage(!page);
    }

    const handleClick = () => {
        setPage(!page);
    }
    
    // render 
    return (
        <div className='login'>
            {/* login branch  */}
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

            {/* form login */}
            <form 
                className='login__form' 
                // onSubmit={page ? handleSignUp : handleSignIn}
            >
                {
                    page 
                    ? 
                    <SignUp handleSignUp={handleSignUp}/> 
                    : 
                    <SignIn handleSignIn={handleSignIn}/>
                }
            </form>

        </div>
    )
}

export default Login;
