import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface CategoryProps {
  link: string | undefined;
  className?: string;
  name: string | undefined;
  active: boolean;
}

const Category: FC<CategoryProps> = ({
  link = "#",
  name,
  className,
  active,
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "inline-block py-3 px-10 rounded-full  border border-solid border-secondary-foreground hover:scale-105 transition-all duration-200 ease",
        className,
        active ? "bg-primary text-secondary" : "bg-transparent"
      )}>
      #{name}
    </Link>
  );
};

export default Category;
