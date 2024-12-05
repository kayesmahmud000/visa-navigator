import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa }) => {
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
    }=visa

    const handleSeeDetails=id=>{
       
            
            fetch(`https://visa-nevigator.vercel.app/visa/${id}`)
    }
    return (
        <div className='text-black'>
            <div className="card rounded-md h-[550px]  hover:bg-[#e1c6b7] border border-gray-400  " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <figure className='p-3'>
                    <img
                        src={photo}
                        alt="country photo"
                        className='h-[200px] rounded-lg w-full  object-cover' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {name}
                       
                    </h2>
                    <div className='font-semibold mr-2' >Visa Type: <span className="badge  font-normal  badge-outline">{visType}</span></div>
                   
                    <div className=' divider '></div>
                    <div className="card-actions flex flex-col ">
                        
                        <div className='font-semibold' >Validity: <span className=" font-normal  ">{validity}</span></div>
                        <div className='font-semibold' >Processing Time: <span className="  font-normal ">{processing}</span></div>
                        <div className='font-semibold mr-5' >Age Restriction: <span className=" font-normal  ">{age}</span></div>
                        <div className='font-semibold' >Fee: <span className=" font-normal  "> $ {fee} </span></div>
                        <Link to={`/detailsPage/${_id}`} >  <button onClick={()=>handleSeeDetails(_id)} className="btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">See Details <FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;