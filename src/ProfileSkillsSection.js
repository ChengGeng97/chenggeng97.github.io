import { Box } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";
import { Article, Email } from '@mui/icons-material';

export function ProfileSkillsSection() {
  return (
    <Box id="aboutme" sx={{ py: "5vh" }}>
      <Typography
        align="center"
        sx={{ margin: "1vh 1vw", fontWeight: 'bold' }}
        color="secondary"
      >
        ABOUT ME
      </Typography>

      <Box width="50vw" sx={{ mx: "auto" }}>
        <Stack direction="row" spacing={4}>

          <Box width="50vw">
            <Typography paragraph={true}>I am an NUS Computer Science student who will be graduating in May 2021. During my time in NUS, I was also the President of the Games Development Group.</Typography>
            <Typography paragraph={true}>I will be looking forward to a job in the tech industry after I graduate. If I look like a fit for your company, please feel free to reach out to me!</Typography>

            <Button
              sx={{ my: "0.5vh" }}
              variant="contained"
              startIcon={<Article />}
              href="https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my resume!
            </Button>

            <Button
              sx={{ my: "0.5vh" }}
              variant="contained"
              startIcon={<Email />}
              href="mailto:chenggeng1997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me by email!
            </Button>
          </Box>

          <Box width="50vw">
            <Typography paragraph={true}>My focus areas in Computer Science were Computer Graphics and Artificial Intelligence, with a minor in Interactive Media Development. I am confident that I will be able to pick up any necessary skills or competencies quickly.</Typography>
            <Typography paragraph={true}>I am confident in my abilities in these areas:</Typography>
            <ul>
              <li>C#</li>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </Box>

        </Stack>
      </Box>

    </Box>
  );
}
