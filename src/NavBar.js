import { AppBar, Box, Button, Container } from "@mui/material";

export function NavBar() {
  return (
    <AppBar position="sticky" enableColorOnDark={true}>
      <Box sx={{ mx: "auto" }}>
        <Container>
          <Button sx={{ color: 'white' }} href="#home">HOME</Button>
          <Button sx={{ color: 'white' }} href="#aboutme">ABOUT</Button>
          <Button sx={{ color: 'white' }} href="#workexp">WORK EXPERIENCE</Button>
          <Button sx={{ color: 'white' }} href="#projects">PROJECTS</Button>
          <Button sx={{ color: 'white' }} href="#contact">CONTACT</Button>
        </Container>
      </Box>
    </AppBar>
  );
}
