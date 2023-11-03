import Card from "@/components/ui/card";
import { GhRepo } from "@/services/octokit";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { LuStar } from "react-icons/lu";

const numberFormat = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  notation: "compact",
});

const ProjectCard: FC<{ project: GhRepo; image: string }> = ({
  project,
  image,
}) => {
  return (
    <Card
      tabIndex={0}
      className="transition-all hover:brightness-95 active:scale-95 cursor-pointer"
    >
      <Link href={project.html_url} target="_blank" className="space-y-4">
        <div className="relative h-40">
          <Image
            src={image}
            alt={project.full_name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex justify-between">
          <h3 className="capitalize text-xl">{project.name}</h3>
          <div className="flex items-center gap-1">
            <LuStar />
            <span>{numberFormat.format(project.stargazers_count)}</span>
          </div>
        </div>
        <p>{project.description}</p>
      </Link>
    </Card>
  );
};

export default ProjectCard;
