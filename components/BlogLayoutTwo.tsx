import { Blog } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";

interface BlogLayoutTwoProps {
  blog: Blog;
}

const BlogLayoutTwo: FC<BlogLayoutTwoProps> = ({ blog }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <Link
        href={blog.url}
        className="col-span-4 h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image?.filePath.replace("../public", "")}
          alt={blog.title}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </Link>

      <div className="col-span-8">
        <span className="uppercase font-semibold text-sm text-yellow-400">
          {blog.tags?.[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg">
            <span className="bg-gradient-to-r from-yellow-400/70 to-yellow-400/70 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition=[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="text-muted-foreground capitalize inline-block font-semibold">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
