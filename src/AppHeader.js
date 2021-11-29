import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

export function AppHeader() {
  return (
    <header id="home" className="App-header">
      <div className="DeveloperName"><strong>Ong Cheng Geng</strong></div>
      <div className="DeveloperSubtitle">
        <div>Software Developer</div>
        <div>Background: Whale Shark by JimmyDominico</div>
      </div>

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

    </header>
  );
}
