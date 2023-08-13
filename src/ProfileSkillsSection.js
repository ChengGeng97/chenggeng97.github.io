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
            <Typography paragraph={true}>I am alumni of NUS Computer Science as of May 2021.</Typography>
            <Typography paragraph={true}>I am interested in furthering my career as a game developer. If I look like a fit for your company, please feel free to reach out to me!</Typography>

            <Typography paragraph={true}>
            <Button
              sx={{ my: "0.5vh" }}
              variant="contained"
              startIcon={<Article />}
              href="https://github.com/ChengGeng97/chenggeng97.github.io/raw/main/src/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my resume!
            </Button>
            </Typography>

            <Typography paragraph={true}>
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
            </Typography>
          </Box>

          <Box width="50vw">
            <Typography paragraph={true}>I graduated from NUS Computer Science with a specialization in Computer Graphics and Games. I am confident that I will be able to pick up any necessary skills or competencies quickly.</Typography>
            <Typography paragraph={true}>My current work requires me to use the following:</Typography>
            <ul>
              <li>C#</li>
              <li>C++</li>
              <li>HTML/PHP/JavaScript</li>
            </ul>
          </Box>

        </Stack>
      </Box>

    </Box>
  );
}
