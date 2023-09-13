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
    <section className="w-full h-[75vh] flex flex-row items-center justify-center">
      <div className="inline-block w-2/5 h-full">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let&apos;s Connect!</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
