import { FC } from "react";
import Category from "./Category";
import { slug } from "github-slugger";

interface CategoriesProps {
  categories: string[];
  currentSlug: string;
}

const Categories: FC<CategoriesProps> = ({ categories, currentSlug }) => {
  return (
    <div className=" px-5 sm:px-10 md:px-1.5 lg:px-20 mt-5 md:mt-10 border-t-2 border-b-2 py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10 gap-2">
      {categories.map((category) => (
        <Category
          key={category}
          name={category}
          active={currentSlug === slug(category)}
          link={`/categories/${category}`}
        />
      ))}
    </div>
  );
};

export default Categories;
