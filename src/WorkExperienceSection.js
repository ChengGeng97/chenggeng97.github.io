import 'react-vertical-timeline-component/style.min.css';

import { Laptop, PhoneAndroid } from '@mui/icons-material';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

export function WorkExperienceSection() {
  return (
    <Box id="workexp" sx={{ my: "5vh" }}>
      <Typography align="center">WORK EXPERIENCE</Typography>

      <Timeline>
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
                <li>Programmed interface using Javascript and React.</li>
                <li>Implemented feature to allow students and tutors to save their work through GitHub.</li>
                <li>Made use of prototyping tools such as Figma to demonstrate UI ideas.</li>
                <li>Wrote both user and developer guides for future users/maintainers of the features.</li>
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
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
}
