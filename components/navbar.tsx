import Link from "next/link";

const items = {
  "#contact": "Contact",
  "#projects": "Projects",
  "#skills": "Skills",
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <h2 className="text-3xl">Portfolio</h2>
      <ul className="flex gap-10 m-5 justify-end">
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
    </nav>
  );
};

export default Navbar;
