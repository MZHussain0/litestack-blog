"use client";
import { FC, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";
import { metaData } from "@/lib/metaData";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [click, setClick] = useState(false);

  const toggle = () => setClick(!click);
  return (
    <header className=" w-full p-4 px-5 sm:px-10 flex items-center justify-between ">
      <Logo />

      <button className="inline-block sm:hidden" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-200">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 rounded transition-all ease duration-300 bg-white"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0) translateY(6px)",
              }}>
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 rounded transition-all ease duration-300 bg-white"
              style={{
                opacity: click ? 0 : 1,
              }}>
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 rounded transition-all ease duration-300 bg-white"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0) translateY(-6px)",
              }}>
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="flex sm:hidden w-max py-3 px-6 border border-solid border-muted-foreground rounded-full font-medium capitalize items-center justify-center gap-x-4 fixed top-6 right-1/2 translate-x-1/2 bg-secondary/80 backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <nav className="hidden sm:flex w-max py-3 px-8 border border-solid border-muted-foreground rounded-full font-medium capitalize items-center justify-center gap-x-4 fixed top-6 right-1/2 translate-x-1/2 bg-secondary/80 backdrop-blur-sm z-50">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="hidden sm:flex items-center justify-center gap-x-6">
        <a
          href={metaData.github}
          className="text-muted-foreground hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Github className="w-6 h-6" strokeWidth={2} />
        </a>
        <a
          href={metaData.linkedin}
          className="text-muted-foreground hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Linkedin className="w-6 h-6" strokeWidth={2} />
        </a>
        <a
          href={metaData.twitter}
          className="text-muted-foreground hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Twitter className="w-6 h-6" strokeWidth={2} />
        </a>
      </div>
    </header>
  );
};

export default Header;
