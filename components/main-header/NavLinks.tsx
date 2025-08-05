import Link from "next/link";
import { BiSolidVideos } from "react-icons/bi";
import { FaReadme } from "react-icons/fa";
import { MdAddCall, MdFeaturedPlayList } from "react-icons/md";

export default function NavLinks() {
  return (
    <>
      <Link
        href="about"
        className="text-text text-xl hover:text-muted transition-colors flex items-center justify-start gap-5"
      >
        <FaReadme className="block lg:hidden" />
        <span>درباره ما</span>
      </Link>
      <Link
        href="courses"
        className="text-text text-xl hover:text-muted transition-colors flex items-center justify-start gap-5"
      >
        <BiSolidVideos className="block lg:hidden" />
        <span>دوره ها</span>
      </Link>
      <Link
        href="contact"
        className="text-text text-xl hover:text-muted transition-colors flex items-center justify-start gap-5"
      >
        <MdAddCall className="block lg:hidden" />
        <span>تماس با ما</span>
      </Link>
      <Link
        href="features"
        className="text-text text-xl hover:text-muted transition-colors flex items-center justify-start gap-5"
      >
        <MdFeaturedPlayList className="block lg:hidden" />
        <span>امکانات</span>
      </Link>
    </>
  );
}
