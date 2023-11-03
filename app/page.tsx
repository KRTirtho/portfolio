import Card from "@/components/ui/card";
import DottedHeader from "@/components/ui/dotted-header";
import Image from "next/image";
import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuTwitter } from "react-icons/lu";
import { BsMedium } from "react-icons/bs";

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
  }
};

export default function Home() {
  return (
    <main className="space-y-20">
      <section className="flex flex-col items-center md:items-end">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <Image
            src="/images/profile.jpg"
            alt="Profile Image"
            height={200}
            width={200}
            className="rounded-full"
          />
          <Card>
            <h3 className="text-2xl font-semibold">Kingkor Roy Tirtho</h3>
            <h4 className="text-lg">A Fullstack and Flutter developer</h4>
            <div className="md:hidden flex items-center gap-2 p-1">
              <LuMapPin />
              <p>Dhaka, Bangladesh</p>
            </div>
          </Card>
        </div>
        <Card className="hidden md:flex items-center gap-2 p-1">
          <LuMapPin />
          <p>Dhaka, Bangladesh</p>
        </Card>
      </section>

      <section className="space-y-5">
        <DottedHeader>Connect</DottedHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(links).map(([name, { link, icon: Icon }]) => (
            <div
              key={name}
              className="p-3 rounded-lg transition-all hover:brightness-95 bg-gradient-to-r from-pink-100 to-gray-50 dark:from-secondary-background-dark dark:to-background-dark to-95%"
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

      <section>
        <DottedHeader>Projects</DottedHeader>
      </section>
    </main>
  );
}
