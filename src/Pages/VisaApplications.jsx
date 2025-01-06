import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';
import Swal from 'sweetalert2';
import { authContext } from '../Provider/AuthProvider';

import { RxCross1 } from 'react-icons/rx';

const VisaApplications = () => {
    const { users } = useContext(authContext)

    const [applications, setApplication] = useState([])
    const [search ,setSearch]=useState("")

    // console.log(search)

    useEffect(() => {
        fetch(`https://visa-nevigator.vercel.app/application?email=${users.email}&name=${search}`)
            .then(res => res.json())
            .then(data => setApplication(data))
    }, [users.email, search])

    // useEffect(()=>{
    //     fetch(`https://visa-nevigator.vercel.app/applications?searchParams=${search}`)
    //     .then(res => res.json())
    //     .then(data => setApplication(data))
    // },[search])


    const handleCancel = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-nevigator.vercel.app/application/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Application has been deleted.",
                                icon: "success"
                            });
                            const remainApplication = applications.filter(application => application._id !== id)
                            setApplication(remainApplication)
                        }
                    })

            }
        });


    }

    return (
        <div className='container min-h-screen mx-auto  ' >
            <section className=' mt-28 '>
                <PageHeading title={"My Visa Applications Overview"} subtitle={"Track Your Visa Application Status and History"}></PageHeading>
            </section>
            <div className="join flex justify-center my-10">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e)=>setSearch(e.target.value)}
                    className="input input-bordered text-black join-item" />
                <button className="btn bg-[#e63746] hover:border-[#e63746]  text-white hover:bg-white hover:text-black join-item">Search</button>
            </div>
            {
                applications.length === 0 && <p className='my-32 text-3xl text-[#e63746] font-bold text-center'>You not added any visa application</p>
            }
            <section className='my-10  rounded-md'>
                 <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>
                                                   #
                                                </th>
                                                <th> Visa Image</th>
                                                <th> Visa Name</th>
                                                <th>Visa Type</th>
                                                <th>Validity</th>
                                                <th>Processing Time</th>
                                                <th>Fee</th>
                                                <th>Email</th>
                                              
                                                <th>Cancel</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            {
                                               applications.map((visa, index)=>    <tr key={index}>
                                                    <th>
                                                       {index+1}
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src={visa.photo}
                                                                        alt={visa.name} />
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </td>
                                                    <td>
                                                    {visa.name}
                                                       
                                                      
                                                    </td>
                                                    <td>{visa.visType}</td>
                                                    <td>{visa.validity}</td>
                                                    <td>{visa.processing}</td>
                                                    <td>$ {visa.cost}</td>
                                                    <td> {visa.email}</td>

                                                   
                                                    <td>
                                                    <button onClick={() => handleCancel(visa._id)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black"><RxCross1 /> </button>
                                                    </td>
                                                </tr>)
                                            }
                                           
                                           
                                        
                                        </tbody>
                                        
                                       
                                    </table>
                                </div>

                {/* {
                    applications.map(application => <div key={application._id} className="hero  my-5 px-3 ">
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
                                        <div className='font-semibold' >Applied Date: <span className=" font-normal  ">Applied Date: {application.applied_date} </span></div>

                                    </div>
                                    <div>
                                        <button onClick={() => handleCancel(application._id)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Cancel </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
                } */}
            </section>
        </div>
    );
};

export default VisaApplications;