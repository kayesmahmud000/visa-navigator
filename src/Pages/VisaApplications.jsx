import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';
import Swal from 'sweetalert2';
import { authContext } from '../Provider/AuthProvider';

const VisaApplications = () => {
    const { users } = useContext(authContext)

    const [applications, setApplication] = useState([])
    const [search ,setSearch]=useState("")

    // console.log(search)

    useEffect(() => {
        fetch(`https://visa-nevigator.vercel.app/application/${users.email}`)
            .then(res => res.json())
            .then(data => setApplication(data))
    }, [])

    useEffect(()=>{
        fetch(`https://visa-nevigator.vercel.app/applications?searchParams=${search}`)
        .then(res => res.json())
        .then(data => setApplication(data))
    },[search])


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
        <div className='min-h-screen container mx-auto bg-[#f2faef] p-10' >
            <section>
                <PageHeading title={"My Visa Applications Overview"} subtitle={"Track Your Visa Application Status and History"}></PageHeading>
            </section>
            <div className="join flex justify-center my-10">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e)=>setSearch(e.target.value)}
                    className="input input-bordered join-item" />
                <button className="btn bg-[#e63746] hover:border-[#e63746]  text-white hover:bg-white hover:text-black join-item">Search</button>
            </div>
            {
                applications.length === 0 && <p className='my-32 text-3xl text-[#e63746] font-bold text-center'>You not added any visa application</p>
            }
            <section className='container mx-auto my-10 grid lg:grid-cols-2'>

                {
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
                }
            </section>
        </div>
    );
};

export default VisaApplications;