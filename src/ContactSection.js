import { Email, LinkedIn } from '@mui/icons-material';
import { Box } from "@mui/system";
import { Grid, Link, Typography } from "@mui/material";

export function ContactSection() {
    return (
        <Box className="Section">
            <Box>Contact</Box>
            <Box>Don't be a stranger!</Box>

            <Grid container rowSpacing={1} alignItems="center" justify="center" margin="5vw">
                <Grid item margin="auto">
                    <Typography align="center">
                        <Email fontSize="large" />
                    </Typography>
                    <Typography align="center">Email me at</Typography>
                    <Typography align="center">
                        <Link href="mailto:chenggeng1997@gmail.com">chenggeng1997@gmail.com</Link>
                    </Typography>
                </Grid>

                <Grid item margin="auto">
                    <Typography align="center">
                        <LinkedIn fontSize="large" />
                    </Typography>
                    <Typography align="center">Find me on LinkedIn</Typography>
                    <Typography align="center">
                        <Link href="https://www.linkedin.com/in/cheng-geng-ong-5414361a2/">My Profile</Link>
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    );
}
