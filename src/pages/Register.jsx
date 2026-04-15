import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const Register = () => {
  const { signInGoogle, registerUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelGoogleSignIn = () => {
    signInGoogle()
      .then(res => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className='p-4 h-full'>
        <h3 className="text-3xl font-bold">Create an Account</h3>
        <p className='text-xl'>Register with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handelRegister)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}

          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
              },
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>

          <div className="my-2 text-center font-bold text-lg">OR</div>
          <button
            onClick={handelGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            Google Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;