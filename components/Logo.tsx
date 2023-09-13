import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/" className="flex items-center">
      <div className="md:w-16 w-12 md:mr-4 mr-2 rounded-full overflow-hidden">
        <Image
          src="/logo.png"
          alt="liteStack"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <span className="font-bold text-xl md:text-2xl text-accent-foreground">
        litStack
      </span>
    </Link>
  );
};

export default Logo;
