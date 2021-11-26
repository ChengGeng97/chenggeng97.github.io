import { ProjectCard } from "./ProjectCard.tsx";

export function ProjectsSection() {
  return (
    <div className="Section">
      <header> PROJECTS </header>
        <ProjectCard
          projectName={"BoxKid"}
          projectSubtitle={"A roguelike game made in Unity 3D and C#"}
          contributions={["A", "B", "C"]}
          imageSource={"https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg"}
        />

        <ProjectCard
          projectName={"AAAAAAAAA"}
          projectSubtitle={"I want to die"}
          contributions={["A", "B", "C"]}
          imageSource={"https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg"}
        />

        <ProjectCard
          projectName={"Truck"}
          projectSubtitle={"A real-time strategy game made in Unity 3D and C#"}
          contributions={["A", "B", "C"]}
          imageSource={"https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg"}
        />

        <ProjectCard
          projectName={"Horo"}
          projectSubtitle={"A scheduling tool written in Java"}
          contributions={["A", "B", "C"]}
          imageSource={"https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg"}
        />

    </div>
  );
};
