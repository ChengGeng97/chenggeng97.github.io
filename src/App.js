import './App.css';

import { WorkExperienceSection } from './WorkExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { ProfileSkillsSection } from './ProfileSkillsSection';

function App() {

  return (
    <div className="App">
      <header className="App-header"> Cheng Geng </header>
      <ProfileSkillsSection />
      <WorkExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
