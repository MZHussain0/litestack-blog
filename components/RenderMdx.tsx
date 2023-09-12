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
    <div>
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
