import Link from "next/link";

// components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="p-4 w-full">
      <div className="bg-gray-800 py-16 rounded-2xl text-white grid place-items-center gap-8 size-full p-8 text-center">
        <div className="flex gap-4">
          <Link href={""}>Home</Link>
          <Link href={""}>Solutions</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Resources</Link>
          <Link href={""}>Contact us</Link>
        </div>
        <h1 className="text-[6rem]">Join our community</h1>
        <p>
          We're a community of passionate individuals who strive to make a
          positive impact in the world.
        </p>
        <div className="mt-4">
          <a href="#" className="mx-2">Privacy Policy</a>
          <a href="#" className="mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};