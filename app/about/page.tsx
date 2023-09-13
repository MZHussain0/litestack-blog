import AboutCoverPage from "@/components/AboutCoverPage";
import Skills from "@/components/Skills";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const AboutPage: FC<pageProps> = ({}) => {
  return (
    <section>
      <AboutCoverPage />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20">
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
