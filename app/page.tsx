import BioModule from "@/components/modules/home/bio";
import ConnectModule from "@/components/modules/home/connect";
import ProjectsModule from "@/components/modules/home/projects/projects";
import SkillsModule from "@/components/modules/home/skills/skills";
import Card from "@/components/ui/card";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";

export default function Home() {
  return (
    <main className="space-y-20 mb-10">
      <section className="flex flex-col items-center md:items-end">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <Image
            src="/images/profile.jpg"
            alt="Profile Image"
            height={200}
            width={200}
            className="rounded-full"
          />
          <Card className="space-y-2">
            <h3 className="text-2xl font-semibold">Kingkor Roy Tirtho</h3>
            <h4 className="md:text-lg">A Fullstack and Flutter developer</h4>
            <div className="md:hidden flex items-center justify-end gap-2 p-1">
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

      <BioModule />
      <ConnectModule />
      <SkillsModule />
      <ProjectsModule />
    </main>
  );
}
