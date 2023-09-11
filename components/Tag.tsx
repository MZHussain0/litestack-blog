﻿import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface TagProps {
  link: string | undefined;
  classes?: string;
  name: string | undefined;
}

const Tag: FC<TagProps> = ({ link = "#", name, classes }) => {
  return (
    <Link
      href={link}
      className={cn(
        "inline-block py-3 px-10 bg-primary-foreground rounded-full capitalize font-semibold border-2 border-solid border-secondary-foreground hover:scale-105 transition-all duration-200 ease",
        classes
      )}>
      {name}
    </Link>
  );
};

export default Tag;
