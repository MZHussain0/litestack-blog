import { FC } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className=" w-full p-4 px-10 flex items-center justify-between ">
      <Logo />

      <nav className="w-max py-3 px-8 border border-solid border-muted-foreground rounded-full font-medium capitalize flex items-center justify-center gap-x-4 fixed top-6 right-1/2 translate-x-1/2 bg-secondary/80 backdrop-blur-sm z-50">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="flex items-center justify-center gap-x-6">
        <a
          href=""
          className="text-muted-foreground hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Github className="w-6 h-6" strokeWidth={2} />
        </a>
        <a
          href=""
          className="text-muted-foreground hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Linkedin className="w-6 h-6" strokeWidth={2} />
        </a>
        <a
          href=""
          className="text-muted-foreground hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Twitter className="w-6 h-6" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
};

export default Header;
