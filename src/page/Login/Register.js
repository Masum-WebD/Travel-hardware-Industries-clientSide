import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading.js";

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update Done");
    navigate("/home");
  };

  if (gUser || user) {
    console.log(gUser);
  }
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  let signErrorMessage;
  if (gError || error || updateError) {
    signErrorMessage = (
      <span className="text-red-500 mb-2">
        {error.message || gError?.message || updateError?.message}
      </span>
    );
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96  shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-black text-2xl">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                className="input bg-white input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control  w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
            <div className="form-control  w-full max-w-xs">
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

            {signErrorMessage}

            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="SIgn Up"
            />
          </form>

          <p className="text-black">
            {" "}
            Already have an account?{" "}
            <Link className="text-[#0FCFEC]" to="/login">
              Please Login
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

export default Register;