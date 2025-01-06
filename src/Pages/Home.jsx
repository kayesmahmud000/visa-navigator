import React from 'react';
import Banner from '../Components/Banner';
import LeatestVisa from '../Components/LeatestVisa';
import Services from '../Components/Services';
import FaQs from '../Components/FaQs';
import Contact from './Contact';
import About from '../Components/Gateway';
import Gateway from '../Components/Gateway';


const Home = () => {
    return (
        <div className="container  mx-auto">
            <section>
                <Banner></Banner>
            </section>
            <section className=''>
                <LeatestVisa></LeatestVisa>
            </section>
            <section className=''>
                <Services></Services>
            </section>

            <section className=''>
                <Gateway></Gateway>
            </section>
            <section className=''>
                <FaQs></FaQs>
            </section>
            
        </div>
    );
};

export default Home;

