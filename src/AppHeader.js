import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { ButtonGroup, IconButton, Typography } from '@mui/material';
import { Box } from "@mui/system";

export function AppHeader() {
  return (
    <Box id="home">
      <Typography sx={{ fontWeight: 'bold' }}>Ong Cheng Geng</Typography>
      <Typography>Software Developer</Typography>
      <Typography>Background Image by JimmyDominico</Typography>

      <Box>
        <ButtonGroup>
          <IconButton color="secondary" href="https://github.com/ChengGeng97">
            <GitHub fontSize="large" />
          </IconButton>

          <IconButton color="secondary" href="https://www.linkedin.com/in/cheng-geng-ong-5414361a2/">
            <LinkedIn fontSize="large" />
          </IconButton>

          <IconButton color="secondary" href="mailto:chenggeng1997@gmail.com">
            <Email fontSize="large" />
          </IconButton>
        </ButtonGroup>
      </Box>

    </Box>
  );
}
