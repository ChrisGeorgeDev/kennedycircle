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
  );
};