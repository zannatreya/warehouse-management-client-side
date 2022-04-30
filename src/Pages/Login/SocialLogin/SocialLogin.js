import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/google.png';
import github from '../../../images/github.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='px-2 mt-2'>or</p>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>

            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn-design text-primary bg-light d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className=' btn-design text-primary bg-light d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;