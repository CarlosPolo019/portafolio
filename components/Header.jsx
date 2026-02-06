import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11131d]/85 py-6 text-white backdrop-blur-md xl:py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Carlos<span className="text-violet-400">.</span>
          </h1>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-amber-400 hover:bg-white text-black">Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
