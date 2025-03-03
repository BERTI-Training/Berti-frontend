// components/Testimonials.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Carousel from '@/components/Carousel';
import { useIsMobile } from '@/hooks/use-mobile';

export const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const {valueOf} = useIsMobile()



  useEffect(() => {

    gsap.from(testimonialsRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section id="test" className="py-16 min-h-screen bg-gray-700 text-white flex items-center justify-center">
      <div ref={testimonialsRef}  className="">
        <div className='flex my-8 items-center justify-center flex-col gap-2'>
        <h1 className=" font-bold text-center">Testimonials</h1>
        <p className='w-2/3 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
        </p>
        </div>
        <div className="flex items-center justify-center ">
          {/* Testimonial Cards */}
          <Carousel
          baseWidth={700}
    className=' w-full'
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
        </div>
      </div>
    </section>
  );
};