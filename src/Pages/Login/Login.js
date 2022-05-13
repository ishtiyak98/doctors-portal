import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import LoginWithApp from "./LoginWithApp";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginMessage, setLoginMessage] = useState("");
  const [textColor, setTextColor] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //!-------- handle successful Signup --------
  useEffect(()=>{
    if (user) {
      setLoginMessage("Successfully Registered");
      setTextColor("text-green-500");
      navigate(from, { replace: true });
    }
  }, [user,from, navigate]);

  //!-------- handle Signup error --------
  useEffect(()=>{
    if (error) {
      setLoginMessage(error.message);
      setTextColor("text-red-500");
    }
}, [error]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  

  //!-------- handle form on-submit --------
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="flex h-screen justify-center items-center">
        <div className="card w-11/12 lg:w-[400px] bg-base-100 shadow-xl">
          <div className="card card-body">
            <h2 className="text-2xl font-semibold text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  <span className="label-text-alt text-red-500">
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
                  value="Login"
                />
              </div>
              <p className={`text-center ${textColor} text-sm`}>
                  {loginMessage && loginMessage}
              </p>
            </form>

            <div className="">
              <p className="text-center text-sm">
                New to Doctors Portal?{" "}
                <Link to={"/signup"} className="text-secondary">
                  Create new account
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

export default Login;
