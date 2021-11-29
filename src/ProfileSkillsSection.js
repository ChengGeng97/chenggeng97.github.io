export function ProfileSkillsSection() {
  return (
    <div id="aboutme" className="ProfileSkills">

      <div className="ProfileSkillsColumn">
        <div className="ProfileSkillsHeader">PROFILE</div>
        <p>I am an NUS Computer Science student who will be graduating in May 2021. During my time in NUS, I was also the President of the Games Development Group.</p>
        <p>I will be looking forward to a job in the tech industry after I graduate. If I look like a fit for your company, please feel free to reach out to me!</p>

        <p className="FirstButtonContainer">
          <a
            className="ProfileSkillsButton"
            href="https://cdn.discordapp.com/attachments/703224120191483908/913653902036041790/09-57-38-pomeranian-01.jpg"
          > {"Download my resume"} </a>
        </p>

        <p className="SecondButtonContainer">
          <a
            className="ProfileSkillsButton"
            href="mailto:chenggeng1997@gmail.com"
          > {"Contact me by email"} </a>
        </p>

      </div>

      <div className="ProfileSkillsColumn">
        <div className="ProfileSkillsHeader">SKILLS</div>
        <p>My focus areas in Computer Science were Computer Graphics and Artificial Intelligence, with a minor in Interactive Media Development. I am confident that I will be able to pick up any necessary skills or competencies quickly.</p>
        <p>I am confident in my abilities in these areas:</p>
        <ul>
          <li>C#</li>
          <li>Java</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

    </div>
  );
}
