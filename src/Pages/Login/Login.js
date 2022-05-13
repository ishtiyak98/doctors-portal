import React from "react";
import Navbar from "../Shared/Navbar";
import LoginWithApp from "./LoginWithApp";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
