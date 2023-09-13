import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Tag from "./Tag";
import { slug } from "github-slugger";

interface HomeCoverSectionProps {
  blogs: Blog[];
}

const HomeCoverSection: FC<HomeCoverSectionProps> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[1];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-black/30 from-0% to-secondary rounded-3xl z-0"></div>
        <Image
          src={blog.image?.filePath.replace("../public", "")}
          alt="coverImage"
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          fill
          className="w-full h-full object-cover object-center rounded-3xl -z-10"
        />

        <div className="lg:w-3/4 w-full p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0">
          <Tag
            link={blog?.tags && `/categories/${slug(blog.tags?.[0])}`}
            name={blog.tags?.[0]}
          />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize text-2xl md:3xl lg:text-4xl leading-8 sm:leading-10">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition=[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 text-lg sm:text-xl font-inter">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
