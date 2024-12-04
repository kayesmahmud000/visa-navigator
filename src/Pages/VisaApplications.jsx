import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';

const VisaApplications = () => {
    const loadedApplication= useLoaderData()
    const [applications, setApplication]=useState(loadedApplication)
    // const {email,firstName, lastName , cost , applied_date, validity, processing,visType ,name,photo}=applications
    console.log(loadedApplication)
    return (
        <div>
            <section>
                <PageHeading title={"My Visa Applications Overview"} subtitle={"Track Your Visa Application Status and History"}></PageHeading>
            </section>
            <section className='container mx-auto my-10 grid lg:grid-cols-2'>
           {
            applications.map(application=> <div className="hero  my-5 px-3 ">
                <div className="hero-content flex-col bg-[#d0bfff]  rounded-lg justify-between text-black lg:flex-row  ">
                    <img
                        src={application.photo}
                        className="   rounded-lg h-[300px] md:w-60 object-cover   " />
                    <div>
                        <div className="card-body">
                            <h2 className="card-title text-4xl">
                                {application.name}

                            </h2>
                            <div className='font-semibold mr-2' >Visa Type: <span className="badge  font-normal  badge-outline">{application.visType}</span></div>

                            <div className="card-actions  ">
                                <div className='font-semibold' >Applicant's name: <span className=" font-normal  ">{application.firstName} {application.lastName}</span></div>
                                <div className='font-semibold' >Applicant’s email: <span className=" font-normal  ">{application.email}</span></div>

                                <div className='font-semibold' >Validity: <span className=" font-normal  ">{application.validity}</span></div>
                                <div className='font-semibold mr-3' >Processing Time: <span className="  font-normal ">{application.processing}</span></div><br />
                               
                                <div className='font-semibold mr-4' >Fee: <span className=" font-normal  ">{application.cost} $</span></div>
                                <div className='font-semibold' >Applied Date: <span className=" font-normal  ">{application.applied_date} $</span></div>
                                
                            </div>
                           <div>
                           <button  className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Cancel </button>
                           </div>
                        </div>

                    </div>
                </div>
            </div>)
           }
            </section>
        </div>
    );
};

export default VisaApplications;