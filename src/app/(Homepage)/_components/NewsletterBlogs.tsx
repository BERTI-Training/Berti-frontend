import Image from "next/image";
import Link from "next/link";

export const NewsletterBlogs = () => {
    return (
      <section id="blog" className="bg-gray-100 min-h-96 px-8 md:px-16 py-16">
        <div className="my-8 flex flex-col gap-2 w-2/3">
          <h1>Our Blogs</h1>
          <p>Our blog is a platform where we share our thoughts, experiences, and insights on various topics</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Cards */}
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>

          </div>
          <h2 className="text-3xl font-bold mb-8">Newsletter & Blogs</h2>
          <form className="mb-8">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg mr-2" />
            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg">Subscribe</button>
          </form>
      </section>
    );
  };

  export function BlogCard(){
    return (
        <Link href={""} className="w-full">
            <img src="https://i.pinimg.com/736x/9f/96/a9/9f96a92eee791856df2afc5d3ef58218.jpg" className="max-h-96 w-full object-cover rounded-3xl bg-blue-500" alt=""/>
            <div className="p-4">
                <h4>
                    Blog Title
                </h4>
                <p>
                    Short Description
                </p>
                <div className="flex w-full my-4 gap-4">
                <Image
                src={"https://i.pinimg.com/736x/0b/97/6f/0b976f0a7aa1aa43870e1812eee5a55d.jpg"}
                alt="Course 1"
                className="object-cover object-center rounded-3xl"
                width={52}
                height={52}
                />
                <div className="">
                    <h5>Writer's name</h5>
                    <p>March 14, 2025</p>
                </div>
            </div>

            </div>
        </Link>
    )
  }