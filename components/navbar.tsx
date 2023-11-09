"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const items = {
  "/blog": "Blog",
  "/#connect": "Connect",
  "/#projects": "Projects",
  "/#skills": "Skills",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between mb-4 px-5 py-2">
        <Link href="/">
          <h2 className="text-3xl">Portfolio</h2>
        </Link>
        <ul className="hidden md:flex gap-10 m-5 justify-end">
          {Object.entries(items).map(([link, text]) => (
            <li key={link}>
              <Link href={link}>
                <button className="bg-secondary-background dark:bg-secondary-background-dark text-gray-700 dark:text-gray-400 transition hover:brightness-90 active:brightness-95 active:scale-95 p-2 rounded underline">
                  {text}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <LuMenu />
        </button>
      </nav>

      <Transition show={open}>
        <Transition.Child
          className="transition-all duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed top-0 bg-black/25 h-screen w-screen`}
            onClick={() => {
              setOpen(false);
            }}
          />
        </Transition.Child>
        <Transition.Child
          className="relative transform transition-all duration-500"
          enterFrom="-translate-y-96"
          enterTo="-translate-y-20"
          leaveFrom="-translate-y-20"
          leaveTo="-translate-y-96"
        >
          <div className="absolute w-screen space-y-2 bg-background dark:bg-secondary-background-dark p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Portfolio</h3>
              <button
                className="px-5"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <LuX />
              </button>
            </div>
            <hr />
            <ul className="flex flex-col gap-2">
              {Object.entries(items).map(([link, text]) => (
                <li key={link}>
                  <Link
                    href={link}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <button className="underline">{text}</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Navbar;
