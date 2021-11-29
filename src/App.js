import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppHeader } from './AppHeader';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer'; 
import { NavBar } from './NavBar';
import { ProfileSkillsSection } from './ProfileSkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { WorkExperienceSection } from './WorkExperienceSection';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <AppHeader />
        <ProfileSkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
