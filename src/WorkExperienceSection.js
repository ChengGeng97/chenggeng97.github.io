import 'react-vertical-timeline-component/style.min.css';

import { GitHub, Laptop, PhoneAndroid, YouTube } from '@mui/icons-material';
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

export function WorkExperienceSection() {
  return (
    <Box
      id="workexp"
      sx={{ py: "5vh" }}
      style={{ backgroundColor: "background.paper" }}
    >
      <Typography
        align="center"
        sx={{ margin: "1vh 1vw", fontWeight: 'bold' }}
        color="secondary"
      >
        WORK EXPERIENCE
      </Typography>

      <Timeline sx={{ ml: "-35vw" }}>
      <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            color="text.secondary"
          >
            June 2022 - Current
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
              <TimelineDot TimelineDot color="secondary">
                <PhoneAndroid />
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '5vh', px: 2 }}>
            <Typography variant="h5" component="span" sx={{fontWeight: 'bold'}}> Software Engineer </Typography>
            <Typography paragraph={true} sx={{fontStyle: 'italic'}}> Koei Tecmo Singapore </Typography>
            <Typography>
              <ul>
                <li>Implement new features according to designer‑written specs for the localized version of a Japanese mobile RPG game written in C++.</li>
                <li> Maintain internal webtool used for handling of Japanese to English translations written in JavaScript and PHP.</li>
                <li> Develop and maintain a variety of internal tools used to automate a Programmer and Designer processes.</li>
                <li> Handle the merging of source code from future Japanese versions of the codebase.</li>
                <li> Investigate and fix bugs discovered during QA to ensure smooth running of the game.</li>
                <li> Update internal documentation regarding the game and developmental processes.</li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            color="text.secondary"
          >
            January 2021 - June 2021
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
              <TimelineDot color="primary">
                <Laptop />
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '5vh', px: 2 }}>
            <Typography variant="h5" component="span" sx={{fontWeight: 'bold'}}> Front-End Developer </Typography>
            <Typography paragraph={true} sx={{fontStyle: 'italic'}}>SourceAcademy</Typography>
            <Typography>
              <ul>
                <li>Implemented feature to allow students and tutors to save their work through GitHub.</li>
                <li>Programmed feature interface using Javascript and React.</li>
                <li>Made use of prototyping tools such as Figma to demonstrate UI ideas.</li>
                <li>Wrote both user and developer guides for future users/maintainers of the features.</li>
                <li>
                  <Button
                  sx={{ margin: "0.5vh 0.5vw" }}
                  variant="contained"
                  startIcon={<GitHub />}
                  href={"https://github.com/source-academy/frontend"}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Project Repo
                  </Button>
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            color="text.secondary"
          >
            June 2020 - July 2020
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
              <TimelineDot TimelineDot color="secondary">
                <PhoneAndroid />
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '5vh', px: 2 }}>
            <Typography variant="h5" component="span" sx={{fontWeight: 'bold'}}> Game Developer/Research Assistant </Typography>
            <Typography paragraph={true} sx={{fontStyle: 'italic'}}> Graduate Student Research Project </Typography>
            <Typography>
              <ul>
                <li>Created game in Unity 3D with C#.</li>
                <li>Engaged productively in discussions regarding user experiences and research goals with respect to implementation of the game.</li>
                <li>Made use of Firebase for the logging of research data.</li>
                <li>
                  <Button
                    sx={{ margin: "0.5vh 0.5vw" }}
                    variant="contained"
                    startIcon={<YouTube />}
                    href={"https://youtu.be/G1nPTjCmFKs"}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                  >
                    Video Demo
                  </Button>
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
}
