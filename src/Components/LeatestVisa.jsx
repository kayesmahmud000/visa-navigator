import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";
import VisaCard from "./VisaCard";


const LeatestVisa = () => {
    const [latestVisa, setLatestVisa]=useState([])
console.log(latestVisa)
    useEffect(()=>{
        fetch("http://localhost:5000/newAddVisa")
        .then(res=>res.json())
        .then(data=>setLatestVisa(data))
    },[])
    return (
        <div className="bg-[#f2faef] p-10">
            <section>
                <PageHeading title={"Discover New Visas"} subtitle={"Find the Latest Visas Tailored to Your Needs, Including Tourist, Student, and Official Visas"}></PageHeading>
            </section>
            <section className="my-10">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5"  >
               {
                    latestVisa.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
               </div>
            </section>
        </div>
    );
};

export default LeatestVisa;