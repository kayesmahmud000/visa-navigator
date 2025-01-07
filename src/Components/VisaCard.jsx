import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa }) => {
    const {
        _id,
        photo,
        name,
        visType,
        processing,
       
        validity,
        age,
        fee,                
    }=visa

    const handleSeeDetails=id=>{
       
            
            fetch(`https://visa-nevigator.vercel.app/visa/${id}`)
    }
    return (
        <div className="relative group rounded-lg overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-2xl h-[400px]" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="2000" >
        {/* Image Section */}
        <figure className="w-full h-full relative">
            <img
                src={photo}
             
                
                className="rounded-t-lg transform w-full h-full group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
            />
        </figure>

        {/* Default Info Section */}
        <div className="absolute bottom-0 w-full p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <h2 className="text-3xl font-bold text-black   drop-shadow-lg">{name}</h2>
            <div className="flex items-center gap-1  text-black text-lg font-semibold mt-2 drop-shadow-lg">
                <TbCurrencyTaka size={24}  className="text-[#e63746]"/> {fee}
            </div>
        </div>

        {/* Hover Details Section */}
        <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center ">
            <h2 className="text-3xl font-extrabold text-white mb-4">{name}</h2>
            <p className="text-lg font-medium text-white mb-2">Visa Type: <span className="text-[#e63746] font-semibold">{visType}</span></p>
            <ul className="text-md text-white space-y-2">
                <li><strong>Validity:</strong> {validity}</li>
                <li><strong>Processing Time:</strong> {processing}</li>
                <li><strong>Age Restriction:</strong> {age}</li>
                <li className="flex items-center font-semibold text-white text-lg">
                    <TbCurrencyTaka size={24} className="text-[#e63746]" /> {fee}
                </li>
            </ul>
            <Link to={`/detailsPage/${_id}`} >  <button onClick={()=>handleSeeDetails(_id)} className="btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">See Details <FaArrowRight /></button></Link>
        </div>
    </div>
    );
};

export default VisaCard;