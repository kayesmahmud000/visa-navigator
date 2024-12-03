import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const Banner = () => {
    return (
        <div>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      navigation
      pagination={{ clickable: true }}
      
      
    >
      <SwiperSlide><Slider1/></SwiperSlide>
      <SwiperSlide><Slider2/></SwiperSlide>
      <SwiperSlide><Slider3/></SwiperSlide>
    </Swiper> 
        </div>
    );
};

export default Banner;