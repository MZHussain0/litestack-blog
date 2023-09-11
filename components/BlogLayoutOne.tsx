import { Blog } from "@/.contentlayer/generated";
import Image from "next/image";
import { FC } from "react";
import Tag from "./Tag";
import Link from "next/link";

interface BlogLayoutOneProps {
  blog: Blog;
}

const BlogLayoutOne: FC<BlogLayoutOneProps> = ({ blog }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl relative">
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent from-0% to-secondary/90 rounded-xl z-10"></div>
      <Image
        src={blog.image?.filePath.replace("../public", "")}
        alt="coverImage"
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-cover object-center rounded-xl"
      />

      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag
          link={`/categories/${blog.tags?.[0]}`}
          name={blog.tags?.[0]}
          classes="px-6 text-sm py-2 border"
        />
        <Link href={blog.url} className="">
          <h2 className="font-bold capitalize text-2xl mt-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition=[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
