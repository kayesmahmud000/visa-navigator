import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";
import VisaCard from "./VisaCard";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const LeatestVisa = () => {
    const [latestVisa, setLatestVisa]=useState([])

    useEffect(()=>{
        fetch("https://visa-nevigator.vercel.app/newAddVisa")
        .then(res=>res.json())
        .then(data=>setLatestVisa(data))
    },[])
    return (
        <div className=" py-5">
            <section>
                <PageHeading title={"Discover New Visas"} subtitle={"Find the Latest Visas Tailored to Your Needs, Including Tourist, Student, and Official Visas"}></PageHeading>
            </section>
            <section className="my-10">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5"  >
               {
                    latestVisa.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
               </div>
            </section>
            <div className="flex justify-end">
            <Link to={`/allVisas`} >  <button className="btn bg-[#e63746] hover:border-[#e63746] text-white hover:bg-white hover:text-black">See All Visa <FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default LeatestVisa;