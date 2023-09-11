import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/components/HomeCoverSection";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
    </main>
  );
}
