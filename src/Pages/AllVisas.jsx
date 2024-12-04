import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';
import VisaCard from '../Components/VisaCard';

const AllVisas = () => {
    const loadedAllVisas= useLoaderData()
    const [allVisas, setAllVisas]=useState(loadedAllVisas)

    return (
        <div className='bg-[#f0f4ee] p-4 container mx-auto'>
           <div className='py-5'>
           <PageHeading title={"Visa Central"} subtitle={"Find the Perfect Visa for Your Journey with Complete Application Details"}></PageHeading>
           </div>
           <div className='grid gap-5 my-5 grid-cols-1 lg:grid-cols-4'>
            {
                allVisas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
            }
           </div>
        </div>
    );
};

export default AllVisas;