import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const LoginPage = () => {
    const {handleLogin, handleGoogle, setUsers}= useContext(authContext)
    const [errorMessages , setErrorMessage]=useState("")
    const navigate= useNavigate()
  const  location= useLocation()
    const handleLoginForm=(e)=>{
        e.preventDefault()
        
        const form = e.target
       
        const email = form.email.value
        
        const password = form.password.value
        handleLogin(email, password)
        .then(result=>{
            const user= result.user
            console.log(user)
            setUsers(user)
            navigate(location?.state? location.state:'/')
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log( errorCode ,errorMessage)
            setErrorMessage(errorMessage)
          });
    }

    const googleLogin=()=>{
        handleGoogle()
        .then(result=>{
            const user=result.user
            setUsers(user)
            navigate(location?.state? location.state :'/')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log( errorCode ,errorMessage)
          });

    }
    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h3 className='text-4xl font-bold text-center my-6'> Login Your Account</h3>
                <form onSubmit={handleLoginForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            errorMessages &&  <label className="label">
                            <span className="label-text text-sm text-red-500">{errorMessages}</span>
                        </label>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#5c7cfa] text-lg text-white">Login</button>
                    </div>
                </form>
                <div class="divider px-10 mb-4">OR</div>
                <div className='flex justify-center'>
                    <button onClick={ googleLogin} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-3'> <FcGoogle /> Continue With Google</button>
                </div>
                <p className='text-lg text-center py-5'>Don't have an account ? Please <Link to={"/register"}><span className='text-[#be4bdb] underline'> Register</span></Link></p>
            </div>
        </div>
    );
};

export default LoginPage;