import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import classes from './Contact.module.css';
import { emailjsAPI } from '../../apiconfig.js';
import Button from '@material-ui/core/Button/';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useRef, useState, useReducer } from 'react';
import FadeAnimation from '../Animations/FadeAnimation';
import { inputsReducer } from './inputs-reducer';
import ContactForm from './ContactForm';

const Contact = (props) => {
  const baseInputState = { error: false, touch: false };
  const iniInputsState = {
    name: { ...baseInputState, ref: useRef() },
    company: { ...baseInputState, ref: useRef() },
    phone: { ...baseInputState, ref: useRef(), notMust: true },
    email: { ...baseInputState, ref: useRef() },
    message: { ...baseInputState, ref: useRef() },
  };
  const [onProcess, setOnProcess] = useState(false);
  const [error, setError] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);
  const [inputsState, dispatchForm] = useReducer(inputsReducer, iniInputsState);
  init(emailjsAPI.apiKey);
  const sendEmail = async (e) => {
    setOnProcess(true);
    e.preventDefault();
    try {
      await emailjs.sendForm(
        emailjsAPI.service,
        emailjsAPI.template,
        e.target,
        emailjsAPI.apiKey
      );
      setFormIsSent(true);
    } catch (error) {
      setError(true);
    } finally {
      setOnProcess(false);
    }
  };

  const validateInput = (e) => {
    dispatchForm({ type: e.target.name, value: e.target.value });
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
  const inputsData = Object.entries(inputsState).map((input) => {
    return {
      name: input[0],
      ref: input[1].ref,
      error: input[1].error,
      fixedValue: input[1].fixedValue ? input[1].fixedValue : null,
      valid:
        (!input[1].error && input[1].touch) ||
        (!input[1].error && input[1].notMust),
    };
  });

  const linkedinLink = 'https://linkedin.com/in/omer-zabtani-b09543155';
  return (
    <FadeAnimation>
      <div className={`${props.className} ${classes.contact}`}>
        <h2> Contact</h2>
        <p>
          {
            /* prettier-ignore */ error?errorText:formIsSent?succsesText:
            <span> fill form below and i will get back to you.<br /></span>
          }
          You can also just send me a message to <b>zabtani@gmail.com</b>
          ,call/text me to <b>0525206108</b> or send me a message via my
          <b className={classes.link}>
            <a href={linkedinLink}> Linkden </a>
          </b>
        </p>
        {
          /* prettier-ignore */
          (!formIsSent && !error) && <ContactForm sent={onProcess}  onSubmit={sendEmail}  validate={validateInput} inputs={inputsData}/>
        }

        {(error || formIsSent) && (
          <Button
            className={classes.restartButton}
            type="button"
            onClick={() => {
              dispatchForm({ type: 'restart_inputs', value: iniInputsState });
              error ? setError(false) : setFormIsSent(false);
            }}
            variant="contained"
            color="primary"
          >
            {error ? 'try again' : 'send another message'}
          </Button>
        )}
      </div>
    </FadeAnimation>
  );
};

export default Contact;
