import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Register = () => {

  const {signInGoogle} = useAuth()

  const handelGoogleSignIn = () =>{
    signInGoogle()
    .then(res => {
      console.log(res.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }

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

          {/*  name*/}
          <label className="label">Email</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="name"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500"> name is required </p>
          )}
            {/* email */}

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
          <button className="btn btn-neutral mt-4">Register</button>

          <div className=" my-2 text-center font-bold text-lg"> OR</div>
          {/* Google */}
          <button
          onClick={handelGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Register with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
