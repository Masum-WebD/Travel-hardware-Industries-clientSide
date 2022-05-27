import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    let from = location.state?.from?.pathname || "/";
    
  
    useEffect(() => {
      if (gUser || user) {
        navigate(from, { replace: true });
      }
    }, [user, gUser, from, navigate]);
  
    if (loading || gLoading) {
      return <Loading></Loading>;
    }
    let signMessage;
    if (gError || error) {
      signMessage = (
        <span className="text-red-500 mb-2">{error.message}</span>
      );
    }
    const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password);
    };
    return (
      <div className="flex h-screen justify-center items-center">
        
        <div className="card w-96  shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-black text-2xl">Login</h2>
            <div className="form-control  w-full max-w-xs"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input bg-white input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email address",
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input bg-white input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    maxLength: {
                      value: 6,
                      message: "Must be 6 character or longer password",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
  
              {signMessage}
  
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="Login"
              />
            </form>
  
            <p className="text-black">
              {" "}
              New to doctor portal{" "}
              <Link className="text-[#0FCFEC]" to="/register">
                Create a new account
              </Link>{" "}
            </p>
  
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-accent uppercase"
            >
              {" "}
              Continue with google
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Login;