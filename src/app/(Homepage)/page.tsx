"use client"

import { decrement, increment } from "@/store/slice";
import React from "react";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Hero } from "./_components/Hero";
import { Courses } from "./_components/Courses";
import { NewsletterBlogs } from "./_components/NewsletterBlogs";
import { Testimonials } from "./_components/Testimonials";
import { Marquee } from "./_components/Marquee";
import { AboutUs } from "./_components/AboutUs";
import { TopTrends } from "./_components/TopTrends";

const Page = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Courses />
      <NewsletterBlogs />
      <AboutUs />
      <Testimonials />
      <TopTrends />
      <Marquee />
    </div>
  );
};

export default Page;
