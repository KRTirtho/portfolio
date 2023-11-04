"use client";

import Card from "@/components/ui/card";
import { GhRepo, octokit } from "@/services/octokit";
import Image from "next/image";
import React, { FC } from "react";
import { LuStar } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import ProjectDialog from "./project-dialog";
import { useDisclosure } from "@/utils/hooks/use-disclosure";

const numberFormat = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  notation: "compact",
});

interface ProjectCardProps {
  project: GhRepo;
  image: string | null;
}

function ProjectCard({ project, image }: ProjectCardProps) {
  const { open, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ProjectDialog
        image={image}
        project={project}
        open={open}
        onClose={onClose}
      />
      <Card
        tabIndex={0}
        className="transition-all hover:brightness-95 active:scale-95 cursor-pointer space-y-4"
        onClick={onOpen}
      >
        {image && (
          <div className="relative h-40">
            <Image
              src={image}
              alt={project.full_name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className="flex justify-between">
          <h3 className="flex items-center gap-2 capitalize text-xl">
            {project.name}
            <span>
              <FaGithub />
            </span>
          </h3>
          <div className="flex items-center gap-1">
            <LuStar />
            <span>{numberFormat.format(project.stargazers_count)}</span>
          </div>
        </div>
        <p>{project.description}</p>
      </Card>
    </>
  );
}

export default ProjectCard;
