"use client";
import { Blog } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { FC } from "react";

interface RenderMdxProps {
  blog: Blog;
}

const mdxComponents = {
  Image,
};

const RenderMdx: FC<RenderMdxProps> = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);
  return (
    <div
      className="font-inter prose prose-invert prose-pre:border prose-pre:bg-secondary  sm:prose-base md:prose-xl max-w-max prose-yellow prose-blockquote:bg-yellow-400/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-yellow-400
            prose-blockquote:not-italic prose-blockquote:rounded-r-lg
            prose-li:marker:text-yellow-400 first-letter:text-5xl">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
