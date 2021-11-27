type ProjectCardProps = {
  projectName: string;
  imageSource: string;
  projectSubtitle: string;
  contributions: string[];
  link: string;
};

export const ProjectCard:React.FC<ProjectCardProps> = props => {

  return (
    <div className="ProjectCard">
      <picture>
        <img
          alt="pain"
          className="ProjectPicture"
          src={props.imageSource}
        >
        </img> 
      </picture>
      <div className="ProjectDetails">
        <div className="ProjectTitle">{props.projectName}</div>
        <div className="ProjectSubtitle">{props.projectSubtitle}</div>

        <div className="Contributions">
          <div className="MyContributionsTitle">My Contributions</div>
          <ul>
            {props.contributions.map((contributionString:string) => {
              return <li>{contributionString}</li>;
            })}
          </ul>

          Check it out <a className="ProjectCardLink" href={props.link}>here</a>!
        </div>
      </div>
    </div>
  );
}

