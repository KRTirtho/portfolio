"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const items = {
  "#connect": "Connect",
  "#projects": "Projects",
  "#skills": "Skills",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between mb-4 px-5 py-2">
        <h2 className="text-3xl">Portfolio</h2>
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
      <div
        className={`${
          open ? "md:hidden" : "hidden"
        } fixed top-0 bg-black/25 h-screen w-screen`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="space-y-2 bg-background dark:bg-secondary-background-dark p-5">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl">Portfolio</h3>
            <button className="px-5">
              <LuX />
            </button>
          </div>
          <hr />
          <ul className="flex flex-col gap-2">
            {Object.entries(items).map(([link, text]) => (
              <li key={link}>
                <Link href={link}>
                  <button className="underline">{text}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
