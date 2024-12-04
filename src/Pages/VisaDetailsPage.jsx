import  { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { authContext } from '../Provider/AuthProvider';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const VisaDetailsPage = () => {
    const {users}=useContext(authContext)
    const loadedVisa = useLoaderData()
    const [isModal, setIsModal] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const handleApply = () => {
        setIsModal(true)
    }
    // const modalClose = () => {
    //     setIsModal(false)
    // }
    
    const {
        _id,
        photo,
        name,
        visType,
        processing,
        description,
        validity,
        age,
        fee,
    } = loadedVisa

    const handleApplyFrom= e =>{
        e.preventDefault()
        const form = e.target
        const email= users.email
        const firstName= form.firstName.value
        const lastName= form.lastName.value
        const cost = fee
        const applied_date = startDate.toLocaleDateString("en-CA")
        const application={email,firstName, lastName , cost , applied_date, validity, processing,visType ,name,photo}
        console.log(application)
        setIsModal(false)
        fetch("http://localhost:5000/application",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(application)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <div className='my-5'>
                    <PageHeading title={"Visa Insights"} subtitle={"Everything You Need to Know About Your Visa"}></PageHeading>
                </div>
                <div className="hero my-5 px-3 bg-[#d0bfff] max-w-3xl mx-auto">
                    <div className="hero-content flex-col  justify-between text-black lg:flex-row  ">
                        <img
                            src={photo}
                            className="   rounded-lg h-[200px] w-[400px] object-cover  lg:h-[380px] " />
                        <div>
                            <div className="card-body">
                                <h2 className="card-title text-4xl">
                                    {name}

                                </h2>
                                <div className='font-semibold mr-2' >Visa Type: <span className="badge  font-normal  badge-outline">{visType}</span></div>

                                <div className=' divider '></div>

                                <div className="card-actions flex flex-col ">
                                    <div className='font-semibold' >Description: <span className=" font-normal  ">{description}</span></div>

                                    <div className='font-semibold' >Validity: <span className=" font-normal  ">{validity}</span></div>
                                    <div className='font-semibold' >Processing Time: <span className="  font-normal ">{processing}</span></div>
                                    <div className='font-semibold mr-5' >Age Restriction: <span className=" font-normal  ">{age}</span></div>
                                    <div className='font-semibold' >Fee: <span className=" font-normal  ">{fee} $</span></div>
                                    <button onClick={handleApply} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Apply </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {isModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white text-center justify-center items-start p-6 rounded-md shadow-md">
                       
                    <form  onSubmit={handleApplyFrom} className="card-body">
                    <div className="mb-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" defaultValue={users.email} required />
                    </div>
                       
                    </div>
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="firstName" placeholder="Enter First Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name="lastName" placeholder="Enter Last Name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text"> Applied date</span>
                            </label>
                            <DatePicker className='input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                            {/* <input type="text" name="description" placeholder="description" className="input input-bordered w-full" required /> */}
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Fee</span>
                            </label>
                            <input type="text" name="fee" defaultValue={fee} className="input input-bordered w-full" required />
                        </div>
                    </div>
                   
                    
                    <div className="form-control mt-6">
                    <button  className="btn  bg-[#e63746]  text-white hover:bg-white hover:border hover:border-[#e63746] hover:text-black">Apply</button>
                    </div>
                </form>
                       
                    </div>
                </div>
            )}
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default VisaDetailsPage;