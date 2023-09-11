import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import BlogLayoutThree from "./BlogLayoutThree";
interface FeaturedPostProps {
  blogs: Blog[];
}

const RecentPost: FC<FeaturedPostProps> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href={"/categories/all"}
          className="inline-block text-yellow-400 font-medium underline underline-offset-2 text-lg hover:-translate-y-1 transition-all duration-200">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog: Blog) => (
          <div className="col-span-1 row-span-1 relative" key={blog._id}>
            <BlogLayoutThree blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPost;
