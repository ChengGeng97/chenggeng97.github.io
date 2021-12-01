import { Email, LinkedIn } from '@mui/icons-material';
import { Box } from "@mui/system";
import { Link, Stack, Typography } from "@mui/material";

export function ContactSection() {
  return (
    <Box id="contact">
      <Typography align="center" sx={{ margin: "1vh 1vw" }}>CONTACT</Typography>
      <Typography align="center">Don't be a stranger!</Typography>

      <Typography align="center">
        <Stack sx={{ mx:"auto", my:"10vh" }} direction="row" spacing={4}>
          <Box width="50vw">
            <Typography align="center">
              <Email fontSize="large" />
            </Typography>
            <Typography align="center">Email me at</Typography>
            <Typography align="center">
              <Link
                href="mailto:chenggeng1997@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                chenggeng1997@gmail.com
              </Link>
            </Typography>
          </Box>

          <Box width="50vw">
            <Typography align="center">
              <LinkedIn fontSize="large" />
            </Typography>
            <Typography align="center">Find me on LinkedIn</Typography>
            <Typography align="center">
              <Link
                href="https://www.linkedin.com/in/cheng-geng-ong-5414361a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Profile
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Typography>

    </Box>
  );
}
