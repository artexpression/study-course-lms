"use client";

import { Category } from "@prisma/client";
import { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaSass, FaVuejs, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiSvelteFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbBrandReactNative  } from "react-icons/tb";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "JavaScript": RiJavascriptFill,
  "TypeScript": BiLogoTypescript,
  "React JS": RiReactjsFill,
  "Next JS": TbBrandNextjs,
  "Vue JS": FaVuejs,
  "Node JS": FaNodeJs,
  "Svelte": RiSvelteFill,
  "React Native": TbBrandReactNative,
  "Sass": FaSass,
  "Git": FaGitAlt,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
