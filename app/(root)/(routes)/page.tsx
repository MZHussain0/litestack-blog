import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/components/HomeCoverSection";
import FeaturedPost from "@/components/FeaturedPost";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
    </main>
  );
}
