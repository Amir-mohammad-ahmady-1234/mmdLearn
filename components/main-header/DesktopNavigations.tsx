import Link from "next/link";

export default function DesktopNavigations() {
  return (
    <nav className="hidden lg:flex md:space-x-20 font-bold text-shadow-text">
      <Link
        href="about"
        className="text-text hover:text-muted transition-colors"
      >
        درباره ما
      </Link>
      <Link
        href="courses"
        className="text-text hover:text-muted transition-colors"
      >
        دوره ها
      </Link>
      <Link
        href="contact"
        className="text-text hover:text-muted transition-colors"
      >
        تماس با ما
      </Link>
      <Link
        href="features"
        className="text-text hover:text-muted transition-colors"
      >
        امکانات
      </Link>
    </nav>
  );
}
