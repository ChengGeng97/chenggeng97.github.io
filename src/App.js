import './App.css';

import { AppHeader } from './AppHeader';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { ProfileSkillsSection } from './ProfileSkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { WorkExperienceSection } from './WorkExperienceSection';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6b2bf7',
      light: '#743eef',
    },
    secondary: {
      main: '#f76d05',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <AppHeader />
        <ProfileSkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
