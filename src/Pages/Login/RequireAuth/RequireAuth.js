import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <loading></loading>
    }

    // if (user) {
    //     return children;
    // } else {
    //     return <Navigate to="/login" state={{ from: location }} replace />
    // }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div>
            <h3 className='text-danger'>your email is not verified</h3>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </button>
        </div>
    }

    return children;


};

export default RequireAuth;