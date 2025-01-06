import React from 'react';
import PageHeading from './PageHeading';
import Student from "../assets/student.jpg"
import Bassness from "../assets/bussness.jpg"
import Family from "../assets/family.jpg"
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='  p-2'>
            <div>
                <PageHeading title={'Services'} subtitle={'Outstanding Immigration Visa Services'}></PageHeading>
            </div>
            <section className=' grid gap-24 text-black lg:gap-5 mt-16 mb-28 grid-cols-1 lg:grid-cols-3'>
                <div className="card relative " data-aos="fade-right" data-aos-delay="50"
    data-aos-duration="1000">
                    <figure>
                        <img
                            src={Student}
                            alt="student"
                            className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100' />
                    </figure>
                    <div className="card-body p-3 bg-white rounded-xl  -bottom-20 left-14 absolute shadow-2xl">
                        <h2 className="card-title lg:text-3xl ">Student Visa</h2>
                        <p className='lg:w-5/6'>Processing times vary by visa type and country, ranging from a few weeks to an several months several months</p>
                        <div className="card-actions justify-end">
                            <Link to={"/allVisas"}>
                            <button className=" btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Read More <BsArrowRight></BsArrowRight></button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="card relative " data-aos="fade-down " data-aos-delay="50"
    data-aos-duration="1000">
                    <figure>
                        <img
                            src={Bassness}
                            alt="bassness" 
                            className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100'/>
                    </figure>
                    <div className="card-body p-3 bg-white rounded-xl -bottom-20 left-14 absolute shadow-2xl ">
                        <h2 className="card-title  lg:text-3xl">Business Visa</h2>
                        <p className='lg:w-5/6'>The required documents vary by visa is type but generally include a valid times passport, application photos</p>
                        <div className="card-actions justify-end">
                        <Link to={"/allVisas"}>
                            <button className=" btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Read More <BsArrowRight></BsArrowRight></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card relative " data-aos="fade-left" data-aos-delay="50"
    data-aos-duration="2000">
                    <figure>
                        <img
                            src={Family}
                            alt="family" 
                            className=' transform hover:scale-110 transition-all duration-500 ease-in-out brightness-100'/>
                    </figure>
                    <div className="card-body p-3 bg-white rounded-xl  -bottom-20 left-14 absolute shadow-2xl">
                        <h2 className="card-title  lg:text-3xl">Family Visa</h2>
                        <p className='lg:w-5/6'>If your application is denied, you will be given a reason. You may be able to kinds reapply or appeal</p>
                        <div className="card-actions justify-end">
                        <Link to={"/allVisas"}>
                            <button className=" btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">Read More <BsArrowRight></BsArrowRight></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;