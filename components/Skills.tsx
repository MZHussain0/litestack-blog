import { skillSet } from "@/lib/skills";
import { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="w-full flex flex-col p-20 border-b-2 ">
      <span className="font-semibold text-4xl text-yellow-400">
        I&apos;m comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-start gap-6 ">
        {skillSet.map((skill) => (
          <li
            className="font-semibold inline-block text-2xl capitalize py-5 px-12 border-2  mb-6 rounded  hover:scale-105 transition-all ease duration-300 cursor-pointer"
            key={skill.id}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
