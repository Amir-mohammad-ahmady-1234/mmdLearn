import Link from "next/link";
import { IoLogoBuffer } from "react-icons/io";

const Logo = () => {
  return (
    <div className="text-5xl font-bold text-success cursor-pointer">
      <Link href="/" className="flex items-center justify-center space-x-5">
        <IoLogoBuffer />
        <span className="block lg:hidden font-extrabold text-xl">ممی لرن</span>
      </Link>
    </div>
  );
};

export default Logo;
