import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/components/BlogLayoutThree";
import Categories from "@/components/Categories";
import GithubSlugger, { slug } from "github-slugger";
import { FC } from "react";

const slugger = new GithubSlugger();

interface pageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}
export async function generateMetadata({ params }: pageProps) {
  return {
    title: `#${
      params.slug === "all"
        ? "Everything Web Development"
        : params.slug.replace("-", " ")
    } blogs`,

    description: `Explore more about ${
      params.slug === "all" ? "Web Development" : params.slug.replace("-", " ")
    } blogs and learn from the collections of ${
      params.slug
    } blogs and tutorials`,
  };
}

const page: FC<pageProps> = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }

      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  return (
    <article className="mt-4 sm:mt-8 md:mt-12 flex flex-col">
      <div className="px-6 sm:px-12 md:px-24 lg:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl sm:text-3xl md:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">Discover more categories</span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-8 sm:mt-16 md:mt-24 px-8 sm:px-16 md:px-24 lg:px-32">
        {blogs.map((blog) => (
          <article key={blog._id} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default page;
