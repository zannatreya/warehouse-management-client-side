import axios from 'axios';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }
    if (user) {
        // navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter your email address');
        }
    }
    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" ref={emailRef} placeholder="Your Email" />
                <input type="password" ref={passwordRef} placeholder="password" />
                <button>Login</button>


                <p>Don't have an account? <Link to="/signup" className=' text-decoration-none pe-auto'>Sign up first</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary bg-light pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                {errorElement}
            </form>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;