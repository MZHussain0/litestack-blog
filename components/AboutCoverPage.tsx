import Image from "next/image";
import { FC } from "react";

interface AboutCoverPageProps {}

const AboutCoverPage: FC<AboutCoverPageProps> = ({}) => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 flex items-center justify-center flex-wrap">
      <div className="w-full md:w-1/2 h-full flex justify-center">
        <Image
          src={"/character.png"}
          alt="About cover image"
          width={600}
          height={600}
          className="w-2/3 md:w-full md:h-full object-contain object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 sm:px-10 md:px-16">
        <h1 className="font-bold capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Dream Big, Work Hard, Achieve More!
        </h1>
        <p className="font-medium capitalize text-base lg:text-xl mt-2 md:mt-4 text-muted-foreground pb-4">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I&apos;m A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact - One Pixel At A Time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverPage;
