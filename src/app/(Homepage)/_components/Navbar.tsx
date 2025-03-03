// components/Navbar.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white w-full fixed top-0 text-black z-20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">Berti LMS
        </Link>
        <ul className="flex items-center space-x-6">
          <><Link href="#courses">Courses</Link></>
          <><Link href="#about">About Us</Link></>
          <><Link href="#test">Testimonials</Link></>
          <><Link href="#blog">Blog</Link></>
          <div>
            <Button size={"lg"} variant={"ghost"} asChild>
                <Link href={"/auth/login"}>Log in</Link>
            </Button>
            <Button size={"lg"} asChild>
                <Link href={"/auth/signup"}>sign up</Link>
            </Button>
          </div>
        </ul>

      </div>
    </nav>
  );
};