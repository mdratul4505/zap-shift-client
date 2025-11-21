import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {

  const {register,handleSubmit, formState:{errors}} = useForm();
  const {signInUser} = useAuth()

  const handelSignIn = (data) =>{
    console.log(data)
    signInUser(data.email , data.password)
    .then(result =>{
      console.log(result)
    })
    .then(error =>{
      console.log(error)
    })

  }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className='p-4 h-full'>
            <h3 className="text-3xl font-bold">Welcome Back</h3>
          <p className='text-xl'>Login with ZapShift</p>
          </div>
      <form onSubmit={handleSubmit(handelSignIn)} className="card-body">
        <fieldset className="fieldset">
          {/* email  */}
          <label className="label">Email</label>
          <input type="email" {...register('email' , {required: true})} className="input" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'> please provide your email</p>}
          {/* password */}
          <label className="label">Password</label>
          <input type="password" {...register('password' , {required: true})} className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Net to zapshift <Link to={'/register'} className='text-blue-400'>Register</Link></p>
      </form>
    </div>

    );
};

export default Login;