﻿import { Blog } from "@/.contentlayer/generated";
import { parseISO } from "date-fns";
import format from "date-fns/format";
import Link from "next/link";
import { FC } from "react";

interface BlogDetailsProps {
  blog: Blog;
  slug: string;
}

const BlogDetails: FC<BlogDetailsProps> = ({ blog, slug }) => {
  return (
    <div className="px-10 bg-yellow-400 text-secondary py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
      <span>10 views</span>
      <div className="">{blog.readingTime.text}</div>
      <Link href={`/categories/${blog.tags?.[0]}`}>#{blog.tags?.[0]}</Link>
    </div>
  );
};

export default BlogDetails;