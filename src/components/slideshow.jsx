import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import { Autoplay, Pagination, Mousewheel, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// images
import jasmine1 from '../../public/images/jasmine-1.jpg'
import jasmine2 from '../../public/images/jasmine-2.jpg'
import jasmine3 from '../../public/images/jasmine-3.jpg'
import yomi1 from '../../public/images/yomi-1.png'
import yomi2 from '../../public/images/yomi-2.png'
import yomi3 from '../../public/images/yomi-3.png'
import restlater1 from '../../public/images/restlater-1.png'
import restlater2 from '../../public/images/restlater-2.png'
import restlater3 from '../../public/images/restlater-3.png'
import rasa1 from '../../public/images/rasa-1.png'
import rasa2 from '../../public/images/rasa-2.png'
import rasa3 from '../../public/images/rasa-3.png'
import amari1 from '../../public/images/amari-1.jpg'
import signatura1 from '../../public/images/signatura-1.jpg'
import signatura2 from '../../public/images/signatura-2.jpg'
import signatura3 from '../../public/images/signatura-3.jpg'


export default function Slideshow() {
  const pages = ['Jasmine', 'Yomi', 'Restlater', 'Rasa Group', 'Amari', 'Signatura']
  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${pages[index]}</span>`;
    },
  };

  return (
    <div className='w-full'>
      <div className='w-full flex-col justify-center items-center'>
        <Swiper
          loop={true}
          modules={[Pagination, Mousewheel]}
          pagination={pagination}
          mousewheel={true}
          centeredSlides={true}
        >
          <SwiperSlide>
          <Link href='https://www.figma.com/file/eCTHY33eBmNpVHFuNg2gvz/Jaklingko-Mailing-System?node-id=14%3A191&t=O678XFBLla3S5sct-1' target='_blank'>
            <Slider images={[jasmine1, jasmine2, jasmine3]} />
            <p className='text-center mt-3 mx-5 text-xs md:text-base'>Mailing system that helps JakLinko&apos;s secretaries handle inbound & outbound letters.</p>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://yomi-learn.web.app/' target='_blank'>
              <Slider images={[yomi1, yomi2, yomi3]} />
              <p className='text-center mt-3 mx-5 text-xs md:text-base'>A web application that helps to learn Japanese Kana.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://rest-later.web.app/' target='_blank'>
              <Slider images={[restlater1, restlater2, restlater3]} />
              <p className='text-center mt-3 mx-5 text-xs md:text-base'>A web application to reserve a grave for the future.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://rasa-compro.vercel.app/' target='_blank'>
              <Slider images={[rasa1, rasa2, rasa3]} />
              <p className='text-center mt-3 mx-5 text-xs md:text-base'>Rasa Group company profile whose design are based on company proposal presentation.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://www.figma.com/proto/EN3ZpaDA9gFCYKeMvmFjrg/Amari?node-id=201%3A1309&scaling=scale-down&page-id=80%3A255&starting-point-node-id=157%3A540' target='_blank'>
              <Slider images={[amari1]} />
              <p className='text-center mt-3 mx-5 text-xs md:text-base'>An app design that helps to find a recipes based on user&apos;s remaining ingredients.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='https://www.figma.com/proto/ZbuOn76T7HJZZjSYzwYeZN/signatura?node-id=39-20&starting-point-node-id=1%3A2&mode=design&t=GFbbITMyQv7QhfcF-1' target='_blank'>
              <Slider images={[signatura1, signatura2, signatura3]} />
              <p className='text-center mt-3 mx-5 text-xs md:text-base'>Android App for QR-Based Signature Generation and Validation with Advanced Encryption Standard (AES) Cryptography and Base64 Encoding</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='swiper-pagination w-full relative mt-10' />
    </div>
  )
}

function Slider({ images }) { 
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      modules={[Autoplay, EffectFade, Autoplay]}
      centeredSlides={true}
      effect={'fade'}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
           src={image}
            alt='image'
            height={720}
            width={1280}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
