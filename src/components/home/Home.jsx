
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Images import
import Home1 from '../../assets/home1.svg';
import Home2 from '../../assets/home1.svg';
import Home3 from '../../assets/home1.svg';
import ceo from '../../assets/ceo.svg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WelcomeMessage from './../welcome/WelcomeMessage';
import Services from './../services/Services';
import OurWork from './../work/OurWork';

export default function Home() {
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
        <div className='slide-content w-[100%]'>
          <img src={Home1} alt="Home1" className='animated-img' />
          <div className='text-content'>
            <h1>Postpartum Care</h1>
            <p>We provide postpartum care</p>
            <button>Book Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-content'>
          <img src={Home2} alt="Home2" className='animated-img' />
          <div className='text-content'>
            <h1>Spa</h1>
            <p>We offer the best spa</p>
            <button>Book Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide-content'>
          <img src={Home3} alt="Home3" className='animated-img'/>
          <div className='text-content'>
            <h1>Salon</h1>
            <p>We offer the best salon</p>
            <button>Book Now</button>
          </div>
        </div>
      </SwiperSlide>
        
      </Swiper> */}
      <div className="h-[80vh] bg-[#81A969] relative overflow-hidden">
          <img src={ceo} className="min-w-4 absolute bottom-[-1.6rem]"/>
          <div className='w-2/4 absolute right-[5rem] bottom-[7rem] text-xl'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et  dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore
            </p>
          </div>
      </div>
      <WelcomeMessage />
      <Services/>
      <OurWork/>

    </>
  );
}
