import { FaArrowRight } from 'react-icons/fa6';
import slideImg2 from '../assets/slider1.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Slider3 = () => {
    return (
        <div>
            <div className="hero bg-[#1e1c3b] h-[500px] px-5">
                <div className="hero-content text-white flex-col-reverse lg:flex-row-reverse">
                    <img
                        src={slideImg2}
                        className="lg:max-w-lg rounded-lg " />
                    <div className=''>
                        <h1 className="text-2xl text-center lg:text-start lg:text-5xl font-bold"><Typewriter
            words={["Effortless Visa Processing!"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /> </h1>
                        <p className="py-6">
                        "From visa requirements to application tracking, our dynamic platform offers all the tools you need for efficient and error-free visa processing, tailored to your travel needs."
                        </p>
                        <button className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Discover More <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider3;