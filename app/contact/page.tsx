import ContactForm from "@/components/ContactForm";
import LottieAnimation from "@/components/LottieAnimation";
import { FC } from "react";

interface pageProps {}

export const metadata = {
  title: "Contact Me | LiteStack",
  description:
    "Contact through email or phone for collaberatiion or for hiring",
};
const ContactPage: FC<pageProps> = ({}) => {
  return (
    <section className="w-full md:h-[75vh] flex flex-col md:flex-row  items-center justify-center">
      <div className="inline-block w-3/5 h-full mb-4">
        <LottieAnimation />
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 sm:px-8 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl text-yellow-400">
          Let&apos;s Connect!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
