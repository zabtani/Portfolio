import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import classes from './Contact.module.css';
import { emailjsAPI } from '../../apiconfig.js';
import { Button, Typography } from '@material-ui/core/';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useState, useContext } from 'react';
import FadeAnimation from '../Animations/FadeAnimation';
import ContactForm from './ContactForm';
import ActionsContext from '../../store/ActionsProvider';

const Contact = (props) => {
  const actionsCtx = useContext(ActionsContext);
  const [status, setStatus] = useState({ ...actionsCtx.contactStatus });
  const changeStatus = (update) => {
    actionsCtx.reportContactStatus(update);
    setStatus((prevStatus) => {
      return {
        ...prevStatus,
        ...update,
      };
    });
  };

  useState(() => {
    init(emailjsAPI.apiKey);
  }, []);
  const sendEmail = async (e) => {
    changeStatus({ pending: true });
    e.preventDefault();
    try {
      /* prettier-ignore */
      await emailjs.sendForm(emailjsAPI.service,emailjsAPI.template,e.target,emailjsAPI.apiKey);
      changeStatus({ sent: true, pending: false });
    } catch (e) {
      changeStatus({ error: true, pending: false });
    }
  };
  const restartButtonHandler = () => {
    let change = status.error ? { error: false } : { sent: false };
    changeStatus(change);
  };
  const errorText = (
    <span className={classes.errorText}>
      <HighlightOffIcon className={classes.icon} /> There was an error
      connecting to the form service.
      <br /> fail to send message.
    </span>
  );
  const succsesText = (
    <span className={classes.succsesText}>
      <CheckCircleIcon className={classes.icon} /> Thanks for contacting me!
      <br /> i will reply to you as soon as possible.
    </span>
  );
  const form = <ContactForm onProcess={status.pending} onSubmit={sendEmail} />;
  /* prettier-ignore */
  const restartButton = (
    <Button
      className={classes.restartButton} type="button" variant="contained" color="primary"
      onClick={restartButtonHandler}>
      {status.error ? 'try again' : 'send another message'}
    </Button>
  );
  const linkedinLink = 'https://linkedin.com/in/omer-zabtani-b09543155';
  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.contact}`}>
        <h2> Contact</h2>
        {/* prettier-ignore */}
        <Typography variant="body2" component="p">
          {status.error?errorText:status.sent?succsesText:
          <span> Fill form below and i will get back to you. </span>}
          you can also contact me via <b>zabtani@gmail.com,</b> phone number <b>0525206108</b> or my
          <b className={classes.link}><a href={linkedinLink}> Linkden </a></b> account.
          </Typography>
        {!status.sent && !status.error && form}
        {(status.error || status.sent) && restartButton}
      </div>
    </FadeAnimation>
  );
};

export default Contact;
