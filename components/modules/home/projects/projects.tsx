import DottedHeader from "@/components/ui/dotted-header";
import { octokit } from "@/services/octokit";
import ProjectCard from "./project-card";

const projects = {
  spotube: "/images/projects/spotube.jpg",
  flemozi: "/images/projects/flemozi.jpg",
  wives: "/images/projects/wives.png",
  "fl-query": "/images/projects/fl-query.png",
  wallywiz: "/images/projects/wallywiz.png",
  shopler: "/images/projects/shopler.svg",
  schoolacious: "/images/projects/schoolacious.jpg",
};

const ProjectsModule = async () => {
  const ghProjects = await Promise.all(
    Object.keys(projects).map(async (project) => {
      return {
        project: await octokit.rest.repos.get({
          owner: "KRTirtho",
          repo: project,
        }),
        image: projects[project as keyof typeof projects],
      };
    }),
  );

  return (
    <section id="projects" className="space-y-4">
      <DottedHeader>Projects</DottedHeader>
      <div className="grid grid-cols-3 gap-4">
        {ghProjects.map(({ project: { data }, image }) => {
          return <ProjectCard key={data.id} project={data} image={image} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsModule;
