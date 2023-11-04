import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

function rgba(hex: string, alpha: number) {
  const [r, g, b] = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) ?? [];
  return `rgba(${r},${g},${b},${alpha})`;
}
const SkillItem: FC<{
  src: string;
  link: string;
  skill: string;
  color: string;
}> = ({ src: icon, link, skill, color }) => {
  const src = icon.startsWith("http")
    ? icon
    : `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${icon}.svg`;

  return (
    <Link href={link} target="_blank">
      <div
        className="flex items-center gap-2 p-4 rounded-lg bg-gradient-to-r to-secondary-background dark:to-secondary-background-dark transition-all hover:brightness-90 active:scale-90"
        style={{
          "--tw-gradient-from": `${rgba(
            color,
            0.2,
          )} var(--tw-gradient-from-position)`,
          "--tw-gradient-stops":
            "var(--tw-gradient-from), var(--tw-gradient-to)",
        }}
      >
        <Image src={src} width="22" height="22" alt={skill} />
        <span>{skill}</span>
      </div>
    </Link>
  );
};

export default SkillItem;
