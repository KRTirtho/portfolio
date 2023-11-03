import DottedHeader from "@/components/ui/dotted-header";
import { BsMedium } from "react-icons/bs";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";

const links = {
  GitHub: {
    link: "https://github.com/KRTirtho",
    icon: LuGithub,
  },
  LinkedIn: {
    link: "https://www.linkedin.com/in/kingkor-roy-tirtho-810b951b4/",
    icon: LuLinkedin,
  },
  Twitter: {
    link: "https://twitter.com/@KRTirtho",
    icon: LuTwitter,
  },
  Medium: {
    link: "https://medium.com/@krtirtho",
    icon: BsMedium,
  },
  "krtirtho@gmail.com": {
    link: "mailto:krtirtho@gmail.com",
    icon: LuMail,
  },
};

const ConnectModule = () => {
  return (
    <section id="connect" className="space-y-5">
      <DottedHeader>Connect</DottedHeader>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(links).map(([name, { link, icon: Icon }]) => (
          <div
            key={name}
            className={`p-3 rounded-lg transition-all hover:brightness-95 bg-gradient-to-r from-pink-100 to-gray-50 dark:from-secondary-background-dark dark:to-background-dark to-95% ${
              name === "krtirtho@gmail.com" ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <a
              href={link}
              className="flex items-center gap-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              <p>{name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConnectModule;
