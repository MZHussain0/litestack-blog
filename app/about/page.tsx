import AboutCoverPage from "@/components/AboutCoverPage";
import Skills from "@/components/Skills";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

export const metadata = {
  title: "About Me | LiteStack",
  description: "Some details about LiteStack",
};

const AboutPage: FC<pageProps> = ({}) => {
  return (
    <section className="">
      <AboutCoverPage />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg sm:text-xl lg:text-2xl text-center sm:self-start mx-5 sm:mx-10 md:mx-1.5 xl:mx-20">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="!underline text-yellow-400">
          here
        </Link>{" "}
        and let&apos;s make it happen.
      </h2>
    </section>
  );
};

export default AboutPage;
