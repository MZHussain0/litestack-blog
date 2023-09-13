import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/lib/utils";
import { FC } from "react";
import BlogLayoutOne from "./BlogLayoutOne";
import BlogLayoutTwo from "./BlogLayoutTwo";

interface FeaturedPostProps {
  blogs: Blog[];
}

const FeaturedPost: FC<FeaturedPostProps> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-20 sm:mt-24 md:mt-28 lg:mt-32 px-6 sm:px-10 lg:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Post
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-6 mt-8 sm:mt-16">
        <article className="col-span-1 row-span-2">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPost;
