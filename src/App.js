import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppHeader } from './AppHeader';
import { ContactSection } from './ContactSection';
import { ProfileSkillsSection } from './ProfileSkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { WorkExperienceSection } from './WorkExperienceSection';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <AppHeader />
        <ProfileSkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
