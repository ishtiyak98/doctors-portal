import React, { useEffect } from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const LoginWithApp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [Token] = useToken(user);
    
    useEffect(()=>{
        if (user) {
            Swal.fire({
                icon: 'success',
                title: 'User Found',
              })
            console.log(user);
            navigate(from, { replace: true });
        }
    },[user]);

    useEffect(()=>{
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    },[error]);

    

  return (
    <>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full text-base font-normal" onClick={() => signInWithGoogle()}>Continue With Google</button>
    </>
  );
};

export default LoginWithApp;
