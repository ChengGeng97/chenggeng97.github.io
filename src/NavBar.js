import { AppBar, Button, Container } from "@mui/material";

export function NavBar() {
  return (
    <AppBar position="sticky" enableColorOnDark={true}>
      <Container maxWidth="xl">
        <Button sx={{ color: 'white' }} href="#home">HOME</Button>
        <Button sx={{ color: 'white' }} href="#aboutme">ABOUT</Button>
        <Button sx={{ color: 'white' }} href="#workexp">WORK EXPERIENCE</Button>
        <Button sx={{ color: 'white' }} href="#projects">PROJECTS</Button>
        <Button sx={{ color: 'white' }} href="#contact">CONTACT</Button>
      </Container>
    </AppBar>
  );
}
