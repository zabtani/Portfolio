import classes from './Project.module.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface Props {
  className: string;
  onClick: () => void;
}
const NavigationButton = ({ className, onClick }: Props) => {
  return (
    <div className={`${classes.buttonContainer} ${className}`}>
      <button onClick={onClick}>
        {className === classes.right ? (
          <ChevronRightIcon />
        ) : (
          <ChevronLeftIcon />
        )}
      </button>
    </div>
  );
};

export default NavigationButton;
