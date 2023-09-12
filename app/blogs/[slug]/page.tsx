import { Blog, allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/components/BlogDetails";
import RenderMdx from "@/components/RenderMdx";
import Tag from "@/components/Tag";
import { slug } from "github-slugger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
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
                link={blog?.tags && `/categories/${slug(blog?.tags?.[0])}`}
                className="px-6 text-sm py-2 border"
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
            <div className="col-span-4">
              <details
                className="border border-yellow-400 rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto bg-muted"
                open>
                <summary className="text-lg font-semibold capitalize cursor-pointer">
                  Table of Content
                </summary>
                <ul className="mt-4 font-inter text-base">
                  {blog.toc.map(
                    (
                      heading: { level: string; text: string; slug: string },
                      idx: number
                    ) => (
                      <li key={idx} className="py-2">
                        <a
                          href={`#${heading.slug}`}
                          data-level={heading.level}
                          className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-yellow-200/60 data-[level=three]:pl-6 flex items-center justify-start">
                          {heading.level === "three" && (
                            <span className="flex w-1 h-1 rounded-full bg-yellow-400 mr-2">
                              &nbsp;
                            </span>
                          )}
                          <span className="hover:underline">
                            {heading.text}
                          </span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </details>
            </div>
            <div className="col-span-8">
              <RenderMdx blog={blog} />
            </div>
          </div>
        </>
      )}
    </article>
  );
}
