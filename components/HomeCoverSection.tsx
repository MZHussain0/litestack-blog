import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Tag from "./Tag";

interface HomeCoverSectionProps {
  blogs: Blog[];
}

const HomeCoverSection: FC<HomeCoverSectionProps> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[1];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-secondary/90 rounded-3xl z-0"></div>
        <Image
          src={blog.image?.filePath.replace("../public", "")}
          alt="coverImage"
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className="w-full h-full object-cover object-center rounded-3xl -z-10"
        />

        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0">
          <Tag link={`/categories/${blog.tags?.[0]}`} name={blog.tags?.[0]} />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition=[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-inter">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
