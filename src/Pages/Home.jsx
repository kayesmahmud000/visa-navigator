import React from 'react';
import Banner from '../Components/Banner';
import LeatestVisa from '../Components/LeatestVisa';


const Home = () => {
    return (
        <div className="container px-4 mx-auto">
            <section>
                <Banner></Banner>
            </section>
            <section className='mt-16'>
                <LeatestVisa></LeatestVisa>
            </section>
        </div>
    );
};

export default Home;