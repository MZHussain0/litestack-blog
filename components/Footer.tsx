"use client";
import { metaData } from "@/lib/metaData";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <footer className="mt-16 rounded-2xl bg-muted  m-5  sm:m-10 flex flex-col items-center">
      <h3 className="mt-16 font-medium text-2xl  md:text-3xl lg:text-4xl text-center capitalize px-4">
        Interesting Stories | Updates | Guides{" "}
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 text-muted-foreground">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex max-w-[384px] items-stretch bg-secondary-foreground p-2 rounded mx-4 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Enter your Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent text-muted focus:border-primary focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <button
          type="submit"
          className="bg-secondary text-primary px-5 py-2 rounded cursor-pointer font-medium">
          Submit
        </button>
      </form>

      <div className="my-8 flex items-center justify-center gap-x-6">
        <a
          href={metaData.github}
          className="text-white bg-black px-4 py-3 rounded-xl hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Github className="w-7 h-7" strokeWidth={2} />
        </a>
        <a
          href={metaData.linkedin}
          className="text-white bg-black px-4 py-3 rounded-xl hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Linkedin className="w-7 h-7" strokeWidth={2} />
        </a>
        <a
          href={metaData.twitter}
          className="text-white bg-black px-4 py-3 rounded-xl  hover:text-primary hover:scale-105 hover:-translate-y-[2px] transition-all duration-300 ease">
          <Twitter className="w-7 h-7" strokeWidth={2} />
        </a>
      </div>

      <div className="w-full mt-16 relative font-medium border-t border-solid border-primary py-6 px-8 flex flex-row flex-wrap gap-4 items-center justify-between">
        <span>© 2023 Zaknightly. All rights reserved.</span>
        <Link href={"/sitemap.xml"} className="text-center underline">
          {" "}
          Sitemap.xml{" "}
        </Link>
        <div className="">
          Made with &hearts; by{" "}
          <a
            href="https://mzhussain.vercel.app"
            target="_blank"
            className="underline">
            Zaknightly
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
