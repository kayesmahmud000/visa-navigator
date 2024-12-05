// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import PageHeading from '../Components/PageHeading';
// import VisaCard from '../Components/VisaCard';
// import { CiMenuKebab } from "react-icons/ci";
// const AllVisas = () => {
//     const loadedAllVisas = useLoaderData()
//     const [allVisas, setAllVisas] = useState(loadedAllVisas)

//     return (
//         <div className='bg-[#f0f4ee] p-4 container mx-auto'>
//             <div className='py-5'>
//                 <PageHeading title={"Visa Central"} subtitle={"Find the Perfect Visa for Your Journey with Complete Application Details"}></PageHeading>
//             </div>
//             <div className='my-16'>
//                 <div className="dropdown ">
//                     <div tabIndex={0} role="button" className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Filter <CiMenuKebab /></div>
//                     <ul tabIndex={0} className="dropdown-content menu w-32 bg-base-100 rounded-box z-[1]  p-2 shadow">
//                         <li><button>Student Visa</button></li>
//                         <li><button>Official Visa</button></li>
//                         <li><button>Truist Visa</button></li>
                       
//                     </ul>
//                 </div>
//             </div>
//             <div className='grid gap-5 my-5 grid-cols-1 lg:grid-cols-4'>
//                 {
//                     allVisas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllVisas;
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';
import VisaCard from '../Components/VisaCard';
import { CiMenuKebab } from "react-icons/ci";

const AllVisas = () => {
    const loadedAllVisas = useLoaderData();
    const [allVisas, setAllVisas] = useState(loadedAllVisas);
    const [filter, setFilter] = useState("all");
console.log(loadedAllVisas)
    useEffect(() => {
        if (filter === 'all') {
            setAllVisas(loadedAllVisas);
        }
         else {
            const filteredVisas = [...loadedAllVisas].filter(visa => visa.visType === filter);
            setAllVisas(filteredVisas)
            console.log(filteredVisas)
        }
       
    }, [filter, loadedAllVisas]);

    const handleFilterChange = (type) => {
        setFilter(type);
    };

    return (
        <div className='bg-[#f0f4ee] p-4 container mx-auto'>
            <div className='py-5'>
                <PageHeading title={"Visa Central"} subtitle={"Find the Perfect Visa for Your Journey with Complete Application Details"}></PageHeading>
            </div>
            <div className='mb-24'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#e63746]  border-none text-white hover:bg-white hover:text-black">
                        Filter <CiMenuKebab />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu w-32 bg-white text-black rounded-box z-[1] p-2 shadow">
                        <li><button onClick={() => handleFilterChange('all')}>All Visas</button></li>
                        <li><button onClick={() => handleFilterChange('Student')}>Student Visa</button></li>
                        <li><button onClick={() => handleFilterChange('Official')}>Official Visa</button></li>
                        <li><button onClick={() => handleFilterChange('Tourist')}>Tourist Visa</button></li>
                    </ul>
                </div>
            </div>
            <div className='grid gap-5 my-5 grid-cols-1 lg:grid-cols-4'>
                {allVisas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)}
            </div>
        </div>
    );
};

export default AllVisas;
