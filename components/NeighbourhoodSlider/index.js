// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Neighbourhood() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-01-FirstOntarioArtsCentre.jpg'/>
          <p className='gallery-caption text-center pt-2'>FirstOntario Arts Centre Milton</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-02-ShoppersDrugMart.jpg'/>
          <p className='gallery-caption text-center pt-2'>Shoppers Drug Mart</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-03-TDBank.jpg'/>
          <p className='gallery-caption text-center pt-2'>TD Bank</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-04-CoatesNeighbourhoodPark.jpg'/>
          <p className='gallery-caption text-center pt-2'>Coates Neighbourhood Park</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-05-MiltonDistrictHospital.jpg'/>
          <p className='gallery-caption text-center pt-2'>Milton District Hospital</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-06-TimHortons.jpg'/>
          <p className='gallery-caption text-center pt-2'>Tim Hortons</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-07-Metro.jpg'/>
          <p className='gallery-caption text-center pt-2'>Metro</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-08-Starbucks.jpg'/>
          <p className='gallery-caption text-center pt-2'>Starbucks</p>
        </SwiperSlide>

        <SwiperSlide className=''>
          <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-09-CraigKielburgerSecondarySchool.jpg'/>
          <p className='gallery-caption text-center pt-2'>Craig Kielburger Secondary School</p>
        </SwiperSlide>
      </Swiper>

      <button 
        className={`swiper-button-prev absolute left-0 text-[#111111] top-1/2 transform -translate-y-1/2 z-10 ${
          isBeginning ? 'hidden' : ''
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className={`swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 ${
          isEnd ? 'hidden' : ''
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#111111">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}