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
        console.log(id)
            
            fetch(`http://localhost:5000/visa/${id}`)
    }
    return (
        <div>
            <div className="card rounded-md h-[550px] bg-white hover:bg-[#e1c6b7] border border-gray-400  ">
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
                    <div className="card-actions ">
                        
                        <div className='font-semibold' >Validity: <span className=" font-normal  ">{validity}</span></div>
                        <div className='font-semibold' >Processing Time: <span className="  font-normal ">{processing}</span></div>
                        <div className='font-semibold mr-5' >Age Restriction: <span className=" font-normal  ">{age}</span></div>
                        <div className='font-semibold' >Fee: <span className=" font-normal  ">{fee} $</span></div>
                        <Link to={`/detailsPage/${_id}`} >  <button onClick={()=>handleSeeDetails(_id)} className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">See Details <FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;