import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Navbar from "../Shared/Navbar";
import Spinner from "../Shared/Spinner";
import LoginWithApp from "./LoginWithApp";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const {register, formState: { errors }, handleSubmit} = useForm();
  
  const [signupMessage, setSignupMessage] = useState(""); 
  const [textColor, setTextColor] = useState("");

  //!-------- handle successful Signup --------
  useEffect(()=>{
    if (user) {
      setSignupMessage("Successfully Registered");
      setTextColor("text-green-500");
    }
  }, [user]);


  //!-------- handle Signup error --------
  useEffect(()=>{
      if (error) {
        setSignupMessage(error.message);
        setTextColor("text-red-500");
      }
  }, [error]);


  //!-------- loading-spinner --------
  if (loading || updating) {
    return <Spinner></Spinner>;
  };


  //!-------- handle form on-submit --------
  const handleSignup = async(data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="flex h-screen justify-center items-center">
        <div className="card w-11/12 lg:w-[400px] bg-base-100 shadow-xl">
          <div className="card card-body">
            <h2 className="text-2xl font-semibold text-center">Signup</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-accent w-full max-w-lg"
                  {...register("name", { required: true })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.name?.type === "required" && "name is required"}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-accent w-full max-w-lg"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.email?.type === "required" && "email is required"}
                    {errors.email?.type === "pattern" && errors.email.message}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered input-accent w-full max-w-lg"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Minimum length must be 6",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500 ">
                    {errors.password?.type === "required" &&
                      "password is required"}
                    {errors.password?.type === "minLength" &&
                      errors.password.message}
                  </span>
                </label>
              </div>

              <div className="my-3">
                <input
                  className="btn text-white w-full text-base font-normal"
                  type="submit"
                  value="Signup"
                />
              </div>
              <p className={`text-center ${textColor} text-sm`}>
                  {signupMessage && signupMessage}
              </p>
            </form>

            <div className="">
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to={"/login"} className="text-secondary">
                  Login here
                </Link>
              </p>
            </div>

            <div>
              <LoginWithApp></LoginWithApp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
