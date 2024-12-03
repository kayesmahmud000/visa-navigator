import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h3 className='text-4xl font-bold text-center my-6'> Login Your Account</h3>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#5c7cfa] text-lg text-white">Login</button>
                    </div>
                </form>
                <div class="divider px-10 mb-4">OR</div>
                <div className='flex justify-center'>
                    <button className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-3'> <FcGoogle /> Continue With Google</button>
                </div>
                <p className='text-lg text-center py-5'>Don't have an account ? Please <Link to={"/register"}><span className='text-[#be4bdb] underline'> Register</span></Link></p>
            </div>
        </div>
    );
};

export default LoginPage;