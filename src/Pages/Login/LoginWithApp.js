import React, { useEffect } from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const LoginWithApp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    useEffect(()=>{
        if (user) {
            Swal.fire({
                icon: 'success',
                title: 'User Found',
              })

            console.log(user);
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
