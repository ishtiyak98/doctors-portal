import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from './Spinner';

const ProtectedAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user) 
    let location = useLocation();

    if (loading || adminLoading) {
        return <Spinner></Spinner>;
    }

    if (!user || !admin) {
        signOut(auth);
        toast.error("unauthorized access")
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedAdmin;