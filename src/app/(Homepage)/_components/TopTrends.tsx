import { Button } from "@/components/ui/button";
import { Heart, Save, TrendingUp } from "lucide-react";
import Image from "next/image";


export const TopTrends = () => {
  return (
    <section className="py-16 px-8 md:px-16 min-h-screen">
      <div className="flex gap-4 mb-8 flex-col">
        <h2 className="text-4xl font-bold">Top Trends</h2>
        <p className="text-xl text-gray-600">
          Stay updated with the latest trends in education and professional development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Trend Cards */}
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </section>
  );
};

// TrendCard Component
export function TrendCard() {
  return (
    <div className="bg-white rounded-lg max-h-72  relative shadow-md p-4">
      {/* Like Button */}
      <Button
        variant={"ghost"}
        className="size-16 bg-white/20 group text-white rounded-full absolute top-4 right-4 z-10"
      >
        <Save />
      </Button>

      {/* Trend Image */}
      <div className="size-full min-h-48 relative">
        <Image
          src="https://i.pinimg.com/736x/7b/d9/b5/7bd9b51ccc41e7f22f205f79ce41ced5.jpg"
          alt="Trend 1"
          className="object-cover rounded-3xl"
          fill
        />
      </div>

      {/* Trend Type */}
      <span className="inline-flex items-center p-2 px-4 my-4 bg-green-500/20 text-green-700 gap-2 rounded-2xl">
        <TrendingUp />
        Trending
      </span>

      {/* Trend Title */}
      <h3 className="text-3xl font-bold w-2/3 mb-4">
        The Future of Online Learning
      </h3>

      {/* Trend Description */}
      <p className="text-gray-600">
        Explore how online learning is shaping the future of education and professional development.
      </p>

      {/* Author Details */}
      <div className="flex w-full my-4 gap-4">
        <Image
          src={"https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg"}
          alt="Author"
          className="object-cover object-center rounded-3xl"
          width={52}
          height={52}
        />
        <div className="">
          <h5 className="font-bold">John Doe</h5>
          <p className="text-gray-600">Education Expert</p>
        </div>
      </div>
    </div>
  );
}