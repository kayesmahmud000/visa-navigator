import React from 'react';
import Banner from '../Components/Banner';
import LeatestVisa from '../Components/LeatestVisa';
import Services from '../Components/Services';
import FaQs from '../Components/FaQs';


const Home = () => {
    return (
        <div className="container px-4 mx-auto">
            <section>
                <Banner></Banner>
            </section>
            <section className='mt-16'>
                <LeatestVisa></LeatestVisa>
            </section>
            <section className='my-20'>
                <Services></Services>
            </section>
            <section className='my-24'>
                <FaQs></FaQs>
            </section>
        </div>
    );
};

export default Home;

