import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {registerUser} = useAuth()

  const handelRegister = (data) => {
    console.log(data);
    registerUser(data.email , data.password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  };
  return (

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className='p-4 h-full'>
            <h3 className="text-3xl font-bold">Create an Account</h3>
          <p className='text-xl'>Register with ZapShift</p>
          </div>
      <form onSubmit={handleSubmit(handelRegister)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500"> Email is required </p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
              },
            })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is requred</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 charecters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
