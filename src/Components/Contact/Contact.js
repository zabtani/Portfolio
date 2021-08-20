import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import classes from './Contact.module.css';
import { emailjsAPI } from '../../apiconfig.js';
import { TextField, Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useState } from 'react';
const Contact = (props) => {
  const [error, setError] = useState(false);
  const [formIsSent, setFormIsSent] = useState(false);
  init(emailjsAPI.apiKey);
  const sendEmail = async (e) => {
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
    }
  };
  const contactForm = (
    <>
      <p>Fill form and i will contact you back</p>
      <form className={classes.contactForm} onSubmit={sendEmail}>
        <TextField type="text" name="user_name" label="Name" variant="filled" />
        {/* prettier-ignore */}
        <TextField type="text" name="user_company" label="Company" variant="filled" />
        {/* prettier-ignore */}
        <TextField type="number" name="contact_number" label="Phone" variant="filled" />
        {/* prettier-ignore */}
        <TextField type="email" name="user_email" label="Email" variant="filled" />
        {/* prettier-ignore */}
        <TextField label="message"  name="message" multiline rows={8}  variant="filled"/>
        {/* prettier-ignore */}
        <Button className={classes.submitButton} type="submit" variant="contained" color="primary"> send form  </Button>
      </form>
    </>
  );

  const errorText = (
    <p className={classes.errorText}>
      <HighlightOffIcon className={classes.icon} /> There was an error
      connecting to the form service.
      <br /> fail to send message.
    </p>
  );
  const succsesText = (
    <p className={classes.succsesText}>
      <CheckCircleIcon className={classes.icon} /> Thanks for contacting me!
      <br /> i will reply to you as soon as possible.
    </p>
  );

  return (
    <div data-aos="zoom-in" className={`${props.className} ${classes.contact}`}>
      <h2> Contact</h2>
      {error ? errorText : formIsSent ? succsesText : contactForm}
      <p>
        You can also just send me a message to <b>zabtani@gmail.com</b>,
        <br />
        call/text me to <b>0525206108</b>, or send me a message via my
        <b className={classes.link}>
          <a href="https://linkedin.com/in/omer-zabtani-b09543155"> Linkden </a>
        </b>
        account and i will contact you back.
      </p>
    </div>
  );
};

export default Contact;
