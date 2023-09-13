import { skillSet } from "@/lib/skills";
import { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="w-full flex flex-col p-4 sm:p-8 md:p-12 xl:p-20 border-b-2 ">
      <span className="font-semibold text-2xl sm:text-3xl md:text-4xl text-yellow-400">
        I&apos;m comfortable in...
      </span>
      <ul className="flex flex-wrap mt-4 sm:mt-8 justify-start gap-x-3 sm:gap-x-6 ">
        {skillSet.map((skill) => (
          <li
            className="font-semibold inline-block text-base sm:text-xl md:text-2xl capitalize py-3 sm:py-5 px-6 md:px-12 border-2  mb-3 sm:mb-6 rounded  hover:scale-105 transition-all ease duration-300 cursor-pointer"
            key={skill.id}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
