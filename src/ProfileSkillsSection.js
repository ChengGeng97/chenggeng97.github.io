import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { Article, Email } from '@mui/icons-material';

export function ProfileSkillsSection() {
  return (
    <Box id="aboutme" sx={{my: "5vh"}}>
      <Typography align="center">ABOUT ME</Typography>

      <Box width="50vw" sx={{ mx: "auto", mt: "-8vh"}}>
        <Grid container rowSpacing={1} alignItems="center" justify="center" margin="5vw">
          <Grid item sx={{ width: "20vw", height: "20vw" }} margin="auto">
            <Typography paragraph={true}>I am an NUS Computer Science student who will be graduating in May 2021. During my time in NUS, I was also the President of the Games Development Group.</Typography>
            <Typography paragraph={true}>I will be looking forward to a job in the tech industry after I graduate. If I look like a fit for your company, please feel free to reach out to me!</Typography>

            <Button sx={{my: "0.5vh"}} variant="contained" startIcon={<Article />} href="https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg">
              Download my resume!
            </Button>

            <Button sx={{my: "0.5vh"}} variant="contained" startIcon={<Email />} href="mailto:chenggeng1997@gmail.com">
              Contact me by email!
            </Button>
          </Grid>

          <Grid item sx={{ width: "20vw", height: "20vw" }} margin="auto">
            <Typography paragraph={true}>My focus areas in Computer Science were Computer Graphics and Artificial Intelligence, with a minor in Interactive Media Development. I am confident that I will be able to pick up any necessary skills or competencies quickly.</Typography>
            <Typography paragraph={true}>I am confident in my abilities in these areas:</Typography>
            <ul>
              <li>C#</li>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </Grid>

        </Grid>
      </Box>

    </Box>
  );
}
