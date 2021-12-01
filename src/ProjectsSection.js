import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import { ProjectCard } from "./ProjectCard.tsx";

export function ProjectsSection() {
  return (
    <Box id="projects" margin="auto" sx={{ my: "5vh" }}>
      <Typography align="center" sx={{ margin: "1vh 1vw" }}>PROJECTS</Typography>

      <Box margin="auto">
        <ProjectCard
          projectName={"BoxKid's Adventure (2021)"}
          projectSubtitle={"A roguelike game made in Unity 2D and C#"}
          contributions={["Wrote the code for random dungeon generation", "Creating graphics and special effects for the game", "Contributed to discussions regarding the design and balance of the game"]}
          imageSource={"https://img.itch.zone/aW1hZ2UvMTE5Mzc1My83MzYyODUyLnBuZw==/original/OdGoy1.png"}
          demoLink={"https://wingedevil.itch.io/boxkid-great-adventure"}
          youtubeLink={"https://youtu.be/jqmpduRItf4"}
        />

        <ProjectCard
          projectName={"Arknights Farming Helper Tool (2021)"}
          projectSubtitle={"A command-line tool to keep track of material farming in the Arknights game written in Python"}
          contributions={["Created algorithms to consolidate material instances", "Wrote the source code"]}
          imageSource={"https://cdn.discordapp.com/attachments/703224120191483908/914032316274339910/unknown.png"}
          githubLink={"https://github.com/ChengGeng97/Arknights-Farming-Helper"}
        />

        <ProjectCard
          projectName={"Truck (2020)"}
          projectSubtitle={"A real-time strategy game made in Unity 3D and C#"}
          contributions={["Programmed the player controls", "Created special effects for the game"]}
          imageSource={"https://cdn.discordapp.com/attachments/699637744904831086/699642025451978752/Another_Picture.png"}
          githubLink={"https://github.com/TruckDefenseInstitute/Convoy"}
          youtubeLink={"https://youtu.be/hntkA06WXKE"}
        />

        <ProjectCard
          projectName={"Horo (2019)"}
          projectSubtitle={"A scheduling tool written in Java"}
          contributions={["Created desktop reminders for the application", "Wrote tests to ensure correctness of code"]}
          imageSource={"https://raw.githubusercontent.com/AY1920S1-CS2103T-F12-1/main/master/docs/images/Ui.png"}
          githubLink={"https://github.com/AY1920S1-CS2103T-F12-1/main"}
        />
      </Box>

    </Box>
  );
};
