import React from 'react';
import PageHeading from './PageHeading';
import FaqsImg from "../assets/faqs.jpg"

const FaQs = () => {
    return (
        <div>
            <div>
                <PageHeading title={'Visa FAQs & Guides'}
                    subtitle={"Our Go-To Resource for Visa-related Questions"}></PageHeading>
            </div>
            <section className='flex justify-between  my-10 bg-slate-200 gap-5 p-10'>
                <div className="join join-vertical w-4/6 ">
                    <div className="collapse collapse-arrow join-item bg-white mb-4">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl  font-semibold">Determine the Visa Type</div>
                        <div className="collapse-content">
                            <p>Identify the specific visa type (tourist, student, work) based on your purpose of travel.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item bg-white mb-4">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl  font-semibold">Check Requirements</div>
                        <div className="collapse-content">
                            <p>Review the visa requirements for your destination country.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item bg-white mb-4">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl  font-semibold">Fill Out Application</div>
                        <div className="collapse-content">
                            <p>Complete the visa application form, ensuring accuracy.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item bg-white ">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-semibold">Submit Application</div>
                        <div className="collapse-content">
                            <p>Submit your completed application at the embassy, consulate, or online platform.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[450px] '>
                    <img src={FaqsImg}className='w-full rounded-lg'  alt="" />
                </div>
            </section>
        </div>
    );
};

export default FaQs;