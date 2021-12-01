import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { ButtonGroup, IconButton, Link, Typography } from '@mui/material';
import { Box } from "@mui/system";

export function AppHeader() {
  return (
    <Box id="home" className="AppHeader" height="50vh" width="100">
        <Typography align="center" sx={{py: "10vh"}}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Ong Cheng Geng</Typography>
          <Typography variant="h4">Software Developer</Typography>
          
          <Link
            variant="body2"
            href="https://pixabay.com/photos/whale-shark-shark-aquarium-water-281497/"
          >
            Background Image by JimmyDominico
          </Link>

          <Box sx={{py: "5vh"}}>
            <ButtonGroup>
              <IconButton sx={{px: "0.5vw"}} href="https://github.com/ChengGeng97">
                <GitHub fontSize="large" />
              </IconButton>

              <IconButton sx={{px: "0.5vw"}} href="https://www.linkedin.com/in/cheng-geng-ong-5414361a2/">
                <LinkedIn fontSize="large" />
              </IconButton>

              <IconButton sx={{px: "0.5vw"}} href="mailto:chenggeng1997@gmail.com">
                <Email fontSize="large" />
              </IconButton>
            </ButtonGroup>
          </Box>
        </Typography>
      </Box>
  );
}
