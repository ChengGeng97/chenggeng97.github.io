import './App.css';

import { AppHeader } from './AppHeader';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { ProfileSkillsSection } from './ProfileSkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { WorkExperienceSection } from './WorkExperienceSection';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6b2bf7',
    },
    secondary: {
      main: '#f76d05',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <NavBar />
          <AppHeader />
          <ProfileSkillsSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
