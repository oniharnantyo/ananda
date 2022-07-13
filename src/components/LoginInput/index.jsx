import React, { useState } from "react";
import { useHistory } from "react-router";
import { FailedModal } from 'components/Modal';
import authService from "services/auth.service";

export const LoginInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const history = useHistory();
    const email = "aaa@gmail.com";
    const handleForgotPassButton = () => {
        FailedModal.fire({
            title: '<h3>Forgot your password?</h3>',
            text: 'Please contact ' + email + " for access",
            denyButtonColor: '#0052CC',
        });
    };
    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };
    console.log(username);
    const basicValidation = (username, password) => {
        if (username === "admin" && password === "admin") {
            history.push('/home');
        }
        else {
            FailedModal.fire({
                denyButtonColor: '#D32029',
                text: 'Invalid username or password. Please try again',
                timer: 4000,
                title: 'Failed to Login',
            });
        }
    };

    const handleLogin=(username, password) =>{
        authService.login(username, password)
        .then(()=>{
            history.push('/home')
            window.location.reload();
            },
            error=>{
                const resMessage=(
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) || error.message || error.toString;
                setMessage(resMessage)
                setLoading(false)
            }
        )
    }
    return (<div className="text-center font-light">
        <section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-asphalt bg-no-repeat relative items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=905&q=80')]">
                <div className="absolute bg-asphalt opacity-50 inset-0 z-0"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">Ananda</h1>
                    <p className="text-3xl my-4 font-medium">Content Management System</p>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-asphalt">
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
                    <div className="absolute bg-asphalt opacity-60 inset-0 z-0"></div>
                </div>
                <div className="w-full py-6 z-20">
                    <img src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp" alt="logo vidyasena" className="h-36 flex rounded-lg mx-auto" height='500px' max-width={'40%'} />
                    <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div className="pb-2 pt-4">
                            <div className="text-left">Username</div>
                            <input type="text" onChange={handleUsernameInput} placeholder="Enter username..." className="block w-full p-1 rounded-sm bg-asphalt-secondary" />
                        </div>
                        <div className="pb-2 pt-4">
                            <div className="text-left">Password</div>
                            <input onChange={handlePasswordInput} className="block w-full p-1 rounded-sm bg-asphalt-secondary" type="password" placeholder="Enter password..." />
                        </div>
                        <div className="text-right text-gray-400 hover:underline cursor-pointer">
                            <a onClick={() => handleForgotPassButton()}>Forgot your password?</a>
                        </div>
                        <div className="px-4 pb-2 pt-4">
                            <button
                                className="block w-1/2 p-2 text-md rounded-md bg-primary-active hover:bg-primary-second focus:outline-none mx-auto"
                                onClick={() => basicValidation(username, password)}
                                // onClick={() => handleLogin(username, password)}
                                >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>);
};
