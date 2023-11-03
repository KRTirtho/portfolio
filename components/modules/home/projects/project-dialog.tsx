"use client";

import { GhRepo, octokit } from "@/services/octokit";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useMemo } from "react";
import { LuCode2, LuGlobe, LuX } from "react-icons/lu";
import useSWR from "swr";
import {} from "react-icons";
import Link from "next/link";

interface ProjectDialogProps {
  project: GhRepo;
  image: string;
  open: boolean;
  onClose: () => void;
}

const numberFormat = new Intl.NumberFormat("en-US", {
  compactDisplay: "short",
  notation: "compact",
});

function ProjectDialog({ image, project, open, onClose }: ProjectDialogProps) {
  const { data } = useSWR(project.full_name, () =>
    octokit.rest.repos.listLanguages({
      owner: "KRTirtho",
      repo: project.name,
    }),
  );

  const totalLoc = useMemo(
    () => Object.values(data?.data ?? {}).reduce((acc, curr) => acc + curr, 0),
    [data?.data],
  );

  console.log(project);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-xl transform overflow-hidden rounded-lg bg-background dark:bg-background-dark p-6 text-left align-middle shadow transition-all space-y-4">
                <button
                  className="absolute right-5 top-5 rounded-full p-3 transition-all bg-inherit hover:brightness-90 active:scale-90 z-10"
                  onClick={onClose}
                >
                  <span>
                    <LuX />
                  </span>
                </button>

                <div className="relative h-40 w-full">
                  <Image
                    src={image}
                    alt={project.full_name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium capitalize"
                  >
                    {project.name}
                  </Dialog.Title>
                  <div className="flex items-center gap-2">
                    {project.homepage && (
                      <Link href={project.homepage} target="_blank">
                        <button className="flex flex-col items-center p-4 rounded-full transition-all hover:brightness-90 active:scale-95 hover:bg-background/80">
                          <LuGlobe />
                          <span className="text-xs">Website</span>
                        </button>
                      </Link>
                    )}
                    <Link href={project.html_url} target="_blank">
                      <button className="flex gap-1 justify-center items-center bg-secondary-background-dark dark:bg-secondary-background text-white dark:text-gray-900 transition-all px-6 py-2 rounded-full hover:brightness-90 active:scale-90 text-sm">
                        <span>Source</span>
                        <LuCode2 />
                      </button>
                    </Link>
                  </div>
                </div>
                <Dialog.Description>{project.description}</Dialog.Description>
                <h4 className="text-xl">Languages used</h4>
                <Transition
                  show={!!data}
                  as="div"
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {Object.entries(data?.data ?? {}).map(([language, loc]) => {
                    return (
                      <div key={language} className="flex items-center gap-2">
                        <span className="whitespace-nowrap">{language}</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-primary dark:bg-primary-dark h-2.5 rounded-full"
                            style={{
                              width: `${(loc / totalLoc) * 100}%`,
                            }}
                          />
                        </div>
                        <div className="text-sm">
                          {numberFormat.format(loc)}
                        </div>
                      </div>
                    );
                  })}
                </Transition>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ProjectDialog;
