
import { FaArrowRight } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'

const Slider1 = () => {
    return (
        <div>
            <div
  className="hero h-[500px] "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/fr87PNR/slider3.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-5xl font-bold"><Typewriter
            words={["Simplify Your Visa Journey"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></h1>
      <p className="mb-5">
      "Our comprehensive portal helps you navigate visa requirements effortlessly, providing a streamlined application process and real-time tracking for a stress-free experience."
      </p>
      <button className="btn bg-[#e63746] border-none text-white hover:bg-white hover:text-black">Discover More <FaArrowRight /></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider1;