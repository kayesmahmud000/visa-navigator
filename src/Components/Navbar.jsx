import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Navbar = () => {
    const link = <>
        <li><NavLink className="text-lg " to={"/"}>Home</NavLink></li>
        <li><NavLink className="text-lg " to={"/allVisas"}>All visas</NavLink></li>
        <li><NavLink className="text-lg " to={"/addVisa"}>Add Visa</NavLink></li>
        <li><NavLink className="text-lg " to={"/myVisa"}>My added visas</NavLink></li>
        <li><NavLink className="text-lg " to={"/visaApplication"}>My Visa applications</NavLink></li>

        
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {link}
                    </ul>
                </div>
               <div className='flex items-center justify-center'>
                <img src={Logo} alt="" className=' w-5 md:w-11' />
               <h1 className='md:text-4xl font-bold '>NAVI VISA.</h1>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"}><button className=' btn mr-2 md:mr-4 bg-[#5c7cfa] text-white'>Login</button></Link>
                <Link to={'/register'}><button className=' btn bg-[#be4bdb] text-white '>Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;