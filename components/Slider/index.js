// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Neighbourhood() {
      return (
    <Swiper
    slidesPerView={2}
    centeredSlides={true}
    spaceBetween={30}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,

        },
        // when window width is >= 768px
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
     <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-01-FirstOntarioArtsCentre.jpg'/>
     <p className='gallery-caption text-center pt-2'>FirstOntario Arts Centre Milton</p>
      </SwiperSlide>


      <SwiperSlide className=''>
     <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-01-FirstOntarioArtsCentre.jpg'/>
     <p className='gallery-caption text-center pt-2'>FirstOntario Arts Centre Milton</p>
      </SwiperSlide>


      <SwiperSlide className=''>
     <img src='/img/neighbourhood/KC-Site-NeighbourhoodPhotos-01-FirstOntarioArtsCentre.jpg'/>
     <p className='gallery-caption text-center pt-2'>FirstOntario Arts Centre Milton</p>
      </SwiperSlide>



   
    </Swiper>
  );
};