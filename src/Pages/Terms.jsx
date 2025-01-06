import React from 'react';
import PageHeading from '../Components/PageHeading';

const Terms = () => {
    return (
        <div>
           <div>
                <div className="py-10">
                    <PageHeading title={'Terms & Conditions'} subtitle={"These Terms & Conditions govern your use of our website and services. Please read them carefully before proceeding."}></PageHeading>
                </div>
                <div className='max-w-7xl px-4  mx-auto my-10'>
                    <div>
                        <h3 className='text-2xl font-bold mb-3 '>Terms & Conditions</h3>
                        <p>These Terms and Conditions govern the provision of visa services by <span className="text-red-500 font-semibold">Navi Visa</span> (hereinafter referred to as “Tours & Travels”) to clients applying for global visas (USA, UK, Schengen, etc.) from Bangladesh. By engaging with our services, clients acknowledge and agree to these terms, which are designed to ensure transparency and protect both the client and Tours & Travels in accordance with Bangladesh’s laws and regulations.</p>

                    </div>
                    <div className='my-16'>
                        <h3 className='text-2xl font-bold mb-3'>Service Agreement</h3>
                        <p className="font-semibold"> Scope of Services</p>
                        <p><span className="text-red-500 font-semibold">Navi Visa</span> provides visa consultation, application assistance, appointment scheduling, and document preparation services (flight tickets, hotel reservations, itineraries, and travel insurance) to facilitate the visa application process.</p>
                        <p className="font-semibold mt-3"> Limitations of Service</p>
                        <p><span className="text-red-500 font-semibold">Navi Visa</span>  acts solely as a service provider and does not guarantee the issuance of visas by any embassy, consulate, or visa processing entity. The final decision regarding the visa rests solely with the relevant authorities.</p>
                    </div>
                    <div >
                        <h3 className='text-2xl font-bold mb-3 '>Booking Terms</h3>
                        <p>If you make a booking through our website for travel products, that booking is made with the travel provider named on the booking page and our website only acts as a user interface. Travelers must understand and agree to the terms and conditions of the travel providers (Airlines, Hotels, Tour Operators etc.) before booking or purchasing their products through <span className="text-red-500 font-semibold">Navi Visa</span>. If any traveler faces any issue or dispute regarding any of the bookings, <span className="text-red-500 font-semibold">Navi Visa</span> will act as a point of contact and will use its commercially reasonable efforts to assist the customer.

                        </p>
                        <p>*All prices and offers are subject to change with availability.</p>

                    </div>

                    <div className='my-16'>
                        <h3 className='text-2xl font-bold mb-3 '>Promotion Terms</h3>
                        <p><span className="text-red-500 font-semibold">Navi Visa</span> generates promotion codes/ discounts from time to time which may be availed on the site

                            <span className="text-red-500 font-semibold">Navi Visa</span> reserves the right to add, alter, modify, withdraw all or any of the Terms and Conditions or replace, wholly or in part, the program by any other program, whether similar to this program or not or withdraw it altogether without any prior notice.

                            In case of dispute with any party, <span className="text-red-500 font-semibold">Navi Visa</span>’s decision will be binding and final.

                            When you register with Akashbariholidays.org, we or any of our partners/affiliate/group companies may contact you from time to time to provide the offers/information of such products/services that we believe may benefit you.</p>

                    </div>
                    <div className='my-16'>
                        <h3 className='text-2xl font-bold mb-3 '>Payment Terms</h3>
                        <p>By making a payment using this site, you agree to the use of your personal details for verification and validation of your transactions to ensure no one else is using your credentials without your consent. You must also acknowledge that the details you provide us may be disclosed to third party credit card payment gateway agencies for verification. Your personal details will not be used for any other purposes except to verify and confirm your identity.

                            The Convenience Charge is charged by <span className="text-red-500 font-semibold">Navi Visa</span> and it may change based on payment method.</p>

                    </div>

                </div>
            </div>  
        </div>
    );
};

export default Terms;