import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function WorkExperienceSection() {
  return (
    <div id="workexp" className="Section">
      <header> WORK EXPERIENCE </header>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(74, 71, 184)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(74, 71, 184)' }}
          date="January 2021 - June 2021"
          iconStyle={{ background: 'rgb(74, 71, 184)', color: '#fff' }}
        >
          <h3 className="JobTitle">UI Developer</h3>
          <h4 className="JobPlace">SourceAcademy</h4>
          <ul className="JobDescription">
            <li>Programmed interface using Javascript and React.</li>
            <li>Implemented feature to allow students and tutors to save their work through GitHub.</li>
            <li>Made use of prototyping tools such as Figma to demonstrate UI ideas.</li>
            <li>Wrote both user and developer guides for future users/maintainers of the features.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(131, 71, 184)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(131, 71, 184)' }}
          date="June 2020 - July 2020"
          iconStyle={{ background: 'rgb(131, 71, 184)', color: '#fff' }}
        >
          <h3 className="JobTitle">Game Developer/Research Assistant</h3>
          <h4 className="JobPlace">Graduate Student Research Project</h4>
          <ul className="JobDescription">
            <li>Created game in Unity 3D with C#.</li>
            <li>Engaged productively in discussions regarding user experiences and research goals with respect to implementation of the game.</li>
            <li>Made use of Firebase for the logging of research data.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  );
};
