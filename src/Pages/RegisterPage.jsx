import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h3 className='text-4xl font-bold text-center my-6'> Register Your Account</h3>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="photo url" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#be4bdb] text-lg text-white">Register</button>
                    </div>
                </form>
                <div class="divider px-10 mb-4">OR</div>
                <div className='flex justify-center'>
                    <button className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-3'> <FcGoogle /> Continue With Google</button>
                </div>
                <p className='text-lg text-center py-5'>Already have an account ? Please <Link to={'/login'}><span className='text-[#5c7cfa] underline'>Login</span></Link></p>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;