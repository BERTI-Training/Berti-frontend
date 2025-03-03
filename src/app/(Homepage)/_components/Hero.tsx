// components/Hero.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section  className=" min-h-screen flex items-center justify-center relative text-white py-20">
        <div className='absolute size-full bg-black/30 top-0 z-0'/>
        <Image
        src="https://i.pinimg.com/736x/62/86/37/628637f0d282ef2857eaf6ac9c7c618e.jpg"
        alt="Hero Image"
        className='object-cover -z-10'
        fill
        />
      <div ref={heroRef} className="container mx-auto z-30 text-center">
        <h1 className="text-7xl font-bold mb-4">Welcome to Berti LMS</h1>
        <p className="text-xl mb-8">
            Optimise Training with LMS
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};