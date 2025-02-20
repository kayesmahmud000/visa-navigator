import { Typewriter } from 'react-simple-typewriter';
import sliderImg from '../assets/slider2.jpg'

const Slider2 = () => {
    return (
        <div>
            <div className="hero bg-[#d0bfff] h-[500px]">
                <div className="hero-content flex-col text-black lg:flex-row  ">
                    <img
                        src={sliderImg}
                        className="   rounded-lg w-lg lg:h-[400px] md:max-w-lg" />
                    <div>
                        <h1 className=" text-2xl lg:text-4xl font-bold"><Typewriter
            words={["Navigate Your Way to New Horizons"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            
            delaySpeed={1000}
            
          /></h1>
                        <p className="py-6">
                        "Discover a hassle-free way to manage your visa applications with detailed information, online submission, and tracking features, ensuring you reach your travel destinations smoothly."
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider2;