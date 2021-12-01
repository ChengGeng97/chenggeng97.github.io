import { Link, YouTube, GitHub } from '@mui/icons-material';
import { Button, Box, Paper, Stack, Typography } from '@mui/material';

type ProjectCardProps = {
  projectName: string;
  imageSource: string;
  projectSubtitle: string;
  contributions: string[];
  demoLink?: string;
  githubLink?: string;
  youtubeLink?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <Paper sx={{ my: "5vh", mx:"auto", width: "80vw", height: "40vh", padding: "3vh 3vw" }} variant="elevation" elevation={4}>
      <Stack direction="row" spacing={4}>

        <Box>
          <picture>
            <img
              alt={props.projectName}
              src={props.imageSource}
              className="ProjectPicture"
            >
            </img>
          </picture>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold' }}
          >
            {props.projectName}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontStyle: 'italic' }}
          >
            {props.projectSubtitle}
          </Typography>

          <Typography>
            <ul>
              {props.contributions.map((contributionString: string) => {
                return <li>{contributionString}</li>;
              })}
            </ul>
          </Typography>

          {props.demoLink &&
            <Button sx={{ mx: "0.5vh" }} variant="contained" startIcon={<Link />}>
              Link
            </Button>
          }
          {props.githubLink &&
            <Button sx={{ mx: "0.5vh" }} variant="contained" startIcon={<GitHub />}>
              GitHub
            </Button>
          }
          {props.youtubeLink &&
            <Button sx={{ mx: "0.5vh" }} variant="contained" startIcon={<YouTube />}>
              Video
            </Button>
          }
        </Box>

      </Stack>
    </Paper>
  );
}

