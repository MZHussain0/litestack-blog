import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/components/BlogDetails";
import RenderMdx from "@/components/RenderMdx";
import Tag from "@/components/Tag";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: { slug: string };
}

export default function Page({ params }: pageProps) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      {blog && (
        <>
          <div className="mb-8 text-center relative w-full h-[70vh]">
            <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Tag
                name={blog?.tags?.[0]}
                link={`/categories/${blog?.tags?.[0]}`}
                classes="px-6 text-sm py-2 border"
              />
              <h1 className="block mt-6 font-semibold capitalize text-5xl leading-normal relative w-[5/6]">
                {blog?.title}
              </h1>
            </div>

            <div className="absolute inset-0 h-full bg-black/70" />
            {blog?.image && (
              <Image
                src={blog?.image?.filePath.replace("../public", "")}
                alt={"cover Image"}
                placeholder="blur"
                blurDataURL={blog?.image.blurhashDataUrl}
                width={blog?.image.width}
                height={blog?.image.height}
                className="aspect-square w-full h-full object-cover object-center"
              />
            )}
          </div>
          <BlogDetails blog={blog} slug={params.slug} />

          <div className="grid grid-cols-12 gap-16 mt-8 px-10">
            <div className="col-span-4">TOC</div>
            <div
              className="col-span-8 font-inter prose prose-invert prose-pre:border prose-pre:bg-secondary prose-xl max-w-max prose-yellow prose-blockquote:bg-yellow-400/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-yellow-400
            prose-blockquote:not-italic prose-blockquote:rounded-r-lg
            prose-li:marker:text-yellow-400">
              <RenderMdx blog={blog} />
            </div>
          </div>
        </>
      )}
    </article>
  );
}
