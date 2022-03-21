import classes from './Skills.module.css';
import FadeAnimation from '../Animations/FadeAnimation';
import { SKILLS_SUMMARY, TECHS_SVGS, TOOLS_SVGS } from '../../globals';
import { SectionProps } from '../../interface/Sections';
import { svgListItems } from '../../utils';

const Skills = ({ className }: SectionProps) => {
  const techList = svgListItems(TECHS_SVGS);
  const toolsList = svgListItems(TOOLS_SVGS);
  return (
    <FadeAnimation>
      <div className={`${className} ${classes.skills}`}>
        <h2> Here is what i do.. </h2>
        {SKILLS_SUMMARY}
        <h3>Frontend technologies i practice</h3>
        <ul>{techList}</ul>
        <h3>Some tools i use</h3>
        <ul>{toolsList}</ul>
      </div>
    </FadeAnimation>
  );
};

export default Skills;
