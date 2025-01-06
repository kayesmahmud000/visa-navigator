import PageHeading from "./PageHeading";


const Gateway = () => {
    return (
        <div id="about" className="my-5">
            
            <div>
            {/* Title and Subtitle */}
          
            <div>
                <PageHeading title={'Your Gateway to Global Opportunities'}
                    subtitle={" Empowering Your Journey Beyond Borders with Trust and Expertise."}></PageHeading>
            </div>

            {/* Interactive Cards Section */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6" >
                {/* Card 1: Trust */}
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="2000">
                    <h3 className="text-2xl font-semibold text-blue-600">🤝 Trust</h3>
                    <p className="mt-2 text-gray-600">We prioritize building trustworthy relationships.</p>
                </div>

                {/* Card 2: Expertise */}
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-green-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="2000">
                    <h3 className="text-2xl font-semibold text-green-600">📚 Expertise</h3>
                    <p className="mt-2 text-gray-600">Backed by professionals to guide your visa process smoothly.</p>
                </div>

                {/* Card 3: Support */}
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-yellow-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="2000">
                    <h3 className="text-2xl font-semibold text-yellow-600">🎯 Support</h3>
                    <p className="mt-2 text-gray-600">We offer 24/7 assistance to help you every step of the way.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gateway;
