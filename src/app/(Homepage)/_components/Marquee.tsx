// components/Marquee.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollVelocity from '@/components/ScrollVelocity';

export const Marquee = () => {


  return (
    <section className="bg-gray-800 text-white py-4 overflow-hidden">
        <ScrollVelocity
        texts={["Online Learning - Professional Development - Corporate Training - "]}/>
    </section>
  );
};