import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import classes from './Contact.module.css';
import { emailjsAPI } from '../../apiconfig.js';
const Contact = (props) => {
  init(emailjsAPI.apiKey);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailjsAPI.service,
        emailjsAPI.template,
        e.target,
        emailjsAPI.apiKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div data-aos="zoom-in" className={`${props.className} ${classes.contact}`}>
      <h2> Call me for an interview</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Phone</label>
        <input type="number" name="contact_number" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <p>
        send me an email for zabtani@gmail.com, or just fill the form above, and
        lets be in touch.
      </p>
    </div>
  );
};

export default Contact;
