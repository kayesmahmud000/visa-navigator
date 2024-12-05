import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { users, handleSignout } = useContext(authContext);
    const [isHovered, setIsHovered] = useState(false)



    const link = <>
        <li><NavLink className={({isActive})=>isActive?"text-[#9538E2] mb-3 px-3 py-2  text-sm lg:text-lg" :" mb-4 px-3 text-sm lg:text-lg"} to={"/"}>Home</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"text-[#9538E2]  mb-3 px-3 py-2  text-sm lg:text-lg " :" mb-4 px-3 text-sm lg:text-lg"} to={"/allVisas"}>All visas</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"text-[#9538E2]  mb-3 px-3 py-2  text-sm lg:text-lg " :" mb-4 px-3 text-sm lg:text-lg"} to={"/addVisa"}>Add Visa</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"text-[#9538E2]  mb-3 px-3 py-2  text-sm lg:text-lg " :" mb-4 px-3 text-sm lg:text-lg"} to={"/myVisa"}>My added visas</NavLink></li>
        <li><NavLink className={({isActive})=>isActive?"text-[#9538E2]  mb-3 px-3 py-2  text-sm lg:text-lg " :" mb-4 px-3 text-sm lg:text-lg"} to={"/visaApplication"}>My Visa applications</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={Logo} alt="" className=' w-5 md:w-11' />
                    <h1 className='md:text-4xl font-bold '>NAVI VISA.</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-3 px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end"> 
                
                
            {
                    users?.email ? <div
                        className="user-photo relative w-32"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img src={users?.photoURL} className='w-14 h-14 object-cover rounded-full' alt="User" />
                        {isHovered && <div className=' flex justify-center  absolute z-10  -left-3 right-0  gap-3 rounded-xl shadow-md bg-[#e1c6b7] p-3  flex-col'>
                            <span className="display-name text-2xl text-start font-bold">{users?.displayName}</span>
                            <button onClick={handleSignout} className=' btn mr-2 md:mr-4 bg-[#e63746] text-white hover:bg-white hover:text-black'>Sign Out</button></div>
                        }
                    </div> : <div>
                        <Link to={"/login"}><button className=' btn mr-2 md:mr-4 bg-[#5c7cfa] text-white'>Login</button></Link>
                        <Link to={'/register'}><button className=' btn bg-[#be4bdb] text-white '>Register</button></Link>
                    </div>
                }

               


            </div>
        </div>
    );
};

export default Navbar;