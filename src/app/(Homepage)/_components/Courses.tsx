import { Button } from "@/components/ui/button";
import { Heart, Type } from "lucide-react";
import Image from "next/image";

// components/Courses.tsx
export const Courses = () => {
    return (
      <section className="py-16 px-8 md:px-16 min-h-screen">
        <div className="flex gap-4 mb-8 flex-col">
        <h2 className="">Courses & Training</h2>
        <p>Shapen your skills with online traing and courses</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Cards */}
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>

          </div>
      </section>
    );
  };


  export function CourseCard(){
    return (
        <div id="courses" className="bg-white rounded-lg relative shadow-md p-2">
                <Button variant={"ghost"} className="size-16 bg-white/20 group text-white rounded-full absolute top-4 right-4 z-10">
                    <Heart />
                </Button>
            <div className="size-full min-h-36 relative">
                <Image
                src="https://i.pinimg.com/736x/7b/d9/b5/7bd9b51ccc41e7f22f205f79ce41ced5.jpg"
                alt="Course 1"
                className="object-cover rounded-3xl"
                fill
                />
            </div>
            <span className="inline-flex items-center p-2 px-4 my-4 bg-blue-500/20 text-blue-700 gap-2 rounded-2xl">
                <Type/>
                Course type
            </span>
            <h3 className="text-3xl font-bold w-2/3 mb-4">
                Beginner's Guidance to professianal Pitch deck
            </h3>
            <p>Course Description</p>
            <div className="w-2/3 my-4 relative p-2">
                <div className="p-1 rounded-2xl absolute w-2/3 overflow-clip bg-blue-700"/>
                <div className="p-1 rounded-2xl absolute w-full overflow-clip bg-blue-700/10"/>
            </div>
            <div className="flex w-full my-4 gap-4">
                <Image
                src={"https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg"}
                alt="Course 1"
                className="object-cover object-center rounded-3xl"
                width={52}
                height={52}
                />
                <div className="">
                    <h5>Tranier name</h5>
                    <p>Mentor</p>
                </div>
            </div>
        </div>
    )
  }