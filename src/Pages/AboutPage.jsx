import React from 'react';
import PageHeading from '../Components/PageHeading';
import AboutImg from '../assets/about-banner.jpeg'
const AboutPage = () => {
    return (
        <div className='container  mx-auto ' >
             <div className="py-5 ">
              <PageHeading title={"About Us"} subtitle={""}></PageHeading>
              </div>
            <div className="hero ">
                <div className="hero-content flex-col  justify-between lg:flex-row-reverse">
                    <img
                        src={AboutImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=' space-y-3'>
                        <h1 className="text-3xl  font-bold">Your Trusted Travel Partner</h1>
                        <p className='max-w-xl'><strong>Everyone loves to travel, but not everyone travels. Why?</strong></p>
                        <p className="py-6">
                        The question opens to several answers. When it comes to international travel, the real problems arise. <br /> And navivisa.com came into being to solve the major issue, and that is visa.
                        </p>
                       <p className='max-w-xl'>Every embassy/consulate has its own visa procedures, and people end up in perplexity to proceed with the procedures. Our team members are experts to handle the process, by assisting the customers to achieve the visas, and make sure this is hassle-free for them. Friendly approach, exclusive experts for each visa, best customer service in this sector make navivisa.com out of the box.</p>
                    </div>
                </div>
            </div>
           <div className='max-w-7xl mx-auto'>
           <div className='my-10 text-center'>
                <h2 className=' text-4xl font-bold text-center'>What We do? </h2>
                <p className='my-5' >
                We aggressively target any issues in the global travel scenario and don’t rest until we find a solution. we started from scratch by eliminating recurring visa hassles one by one for our travelers in Bangladesh. Over the years we have successfully eradicated the lack of accurate travel/visa information by building the largest visa database in Bangladesh www.navivisa.com with accurate visa and travel information. We tried to answer the questions of travelers through a dedicated visa Team and social media.
                </p>
                <p>We have developed services that would guide a traveler to prepare a visa application with proper documentation with our premium consultancy. With our Visa Processing Service, we have enabled travelers to avoid unnecessary delay and rejection on visas</p>
            </div>
            <div className='my-10 text-center'>
                <h2 className=' text-4xl font-bold text-center'>What Sets Us Apart From Other Visa Services in Bangladesh? </h2>
                <p className='mt-5' >
                The visa service is available at your convenience and will always be there to assist you with your application.
                Our dedicated team will guide you through the process at every step.
                </p>
                <p>We have developed services that would guide a traveler to prepare a visa application with proper documentation with our premium consultancy. With our Visa Processing Service, we have enabled travelers to avoid unnecessary delay and rejection on visas</p>
            </div>
            <div className='lg:flex gap-5 text-center my-5 justify-between'>
                <div>
                    <h2 className='text-4xl font-bold'>Our Mission</h2>
                    <p>Our mission is to eliminate the fear of complicated processing systems for acquiring visa from every international traveler based in Bangladesh.</p>
                </div>
                <div>
                <h2 className='text-4xl font-bold'> Our Vision</h2>
                <p>We want to make visa process and hassle-free experience to every traveler and we believe it will create a borderless travel experience for every international traveler.</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default AboutPage;