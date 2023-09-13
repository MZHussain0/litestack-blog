import { Blog } from "@/.contentlayer/generated";
import { parseISO } from "date-fns";
import format from "date-fns/format";
import Link from "next/link";
import { FC } from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

interface BlogDetailsProps {
  blog: Blog;
  slug: string;
}

const BlogDetails: FC<BlogDetailsProps> = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-10 bg-yellow-400 text-secondary py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      <span>
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="">{blog.readingTime.text}</div>
      <Link href={blog.tags ? `/categories/${slug(blog?.tags?.[0])}` : "#"}>
        #{blog.tags?.[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
