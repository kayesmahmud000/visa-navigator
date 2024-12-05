import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const {handleGoogle, handleUpdateUser, setUsers, handleCreateUser}= useContext(authContext)
    const navigate= useNavigate()
    const location =useLocation()
    const [errorMessage , setErrorMessage]=useState("")
    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        if(password.length< 6){
            setErrorMessage("Password must be at least 6 character")
            return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/;

        if(!passwordRegex.test(password)){
            setErrorMessage("Must have an Uppercase letter and Must have an Lowercase letter")
            return
        }
        handleCreateUser(email, password)
        
       
        .then(result=>{
            const user= result.user
            console.log(user)
            setUsers(user)
            handleUpdateUser({displayName:name, photoURL:photo})
            .then(()=>{
                navigate('/')
                toast.success("Register Successful")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log( errorCode ,errorMessage)
                toast.error("Login Filed")
              });
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log( errorCode ,errorMessage)
          });

        
    }
    const googleLogin=()=>{
        handleGoogle()
        .then(result=>{
            const user=result.user
            setUsers(user)
            toast.success("Login Successful")
            navigate(location?.state? location.state:'/')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log( errorCode ,errorMessage)
            toast.error("Login Filed")
          });

    }
    return (
        <div>
            <div className='flex text-black justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <h3 className='text-4xl font-bold text-center my-6'> Register Your Account</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                       {
                        errorMessage &&  <label className="label">
                        <span className="label-text text-sm text-red-500">{errorMessage}</span>
                    </label>
                       }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#be4bdb] text-lg text-white">Register</button>
                    </div>
                </form>
                <div class="divider px-10 mb-4">OR</div>
                <div className='flex justify-center'>
                    <button onClick={googleLogin} className=' btn border border-blue-400 bg-white hover:bg-[#A020F0] hover:text-white  my-5 mb-3'> <FcGoogle /> Continue With Google</button>
                </div>
                <p className='text-lg text-center py-5'>Already have an account ? Please <Link to={'/login'}><span className='text-[#5c7cfa] underline'>Login</span></Link></p>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;