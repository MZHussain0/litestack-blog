import Image from "next/image";
import { FC } from "react";

interface AboutCoverPageProps {}

const AboutCoverPage: FC<AboutCoverPageProps> = ({}) => {
  return (
    <section className="w-full h-[75vh] border-b-2 flex items-center justify-center">
      <div className="w-1/2 h-full flex justify-center">
        <Image
          src={"/character.png"}
          alt="About cover image"
          width={1200}
          height={1200}
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h1 className="font-bold capitalize text-6xl">
          Dream Big, Work Hard, Achieve More!
        </h1>
        <p className="font-medium capitalize text-xl mt-4 text-muted-foreground">
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
