import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import classes from './Contact.module.css';
import { d } from '../../apiconfig.js';
const Contact = (props) => {
  console.log(d);

  init('user_nTGRWXN7LG25CrnXxMIj4');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q378jy4',
        'template_xn6rzuw',
        e.target,
        'user_nTGRWXN7LG25CrnXxMIj4'
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
      <h2> welcome</h2>
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
        If you’re interested in playing around with React, you can use an online
        code playground. Try a Hello World template on CodePen, CodeSandbox, or
        Stackblitz. If you prefer to use your own text editor, you can also
        download this HTML file, edit it, and open it from the local filesystem
        in your browser. It does a slow runtime code transformation, so we’d
        only recommend using this for simple demos.
      </p>
    </div>
  );
};

export default Contact;
