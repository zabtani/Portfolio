import classes from './Projects.module.css';
import Project from './Project';
import FadeAnimation from '../Animations/FadeAnimation';
import { PROJECTS } from '../../globals';
import { ProjectData } from '../../interface/Projects';
import { SectionProps } from '../../interface/Sections';
const Projects = ({ className }: SectionProps) => {
  return (
    <FadeAnimation>
      <div className={className}>
        <h2>My Projects</h2>
        <div className={classes.projectsContainer}>
          {PROJECTS.map((project: ProjectData, idx: number) => {
            return <Project key={`${project.name}${idx}`} {...project} />;
          })}
        </div>
      </div>
    </FadeAnimation>
  );
};

export default Projects;
