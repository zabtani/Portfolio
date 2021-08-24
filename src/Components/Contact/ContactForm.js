import { TextField, Button } from '@material-ui/core';
import classes from './Contact.module.css';
const ContactForm = (props) => {
  const fixValue = (ref, fixedValue) => {
    ref.current.value = fixedValue;
  };

  const checkValidaity = () => {
    let valid = true;
    props.inputs.forEach((input) => {
      if (!input.valid) {
        valid = false;
      }
    });
    return valid;
  };
  const isFormValid = checkValidaity();
  const inputs = props.inputs.map((input) => {
    let inputProps;
    switch (input.name) {
      case 'name':
        inputProps = { optional: { type: 'text' }, label: 'Full name' };
        break;
      case 'email':
        inputProps = { optional: { type: 'text' }, label: 'Email' };
        break;
      case 'phone':
        inputProps = { optional: { type: 'number' }, label: 'Phone' };
        break;
      case 'company':
        inputProps = { optional: { type: 'text' }, label: 'Company' };
        break;
      case 'message':
        inputProps = {
          optional: { multiline: true, rows: 8 },
          label: 'Message',
        };
        break;
      default:
        throw new Error(`no props set for ${input.name}`);
    }
    return {
      inputRef: input.ref,
      name: input.name,
      key: input.name,
      error: !input.error ? false : true,
      label: input.error ? input.error : inputProps.label,
      onBlur: fixValue.bind(null, input.ref, input.fixedValue),
      InputLabelProps: { style: { fontSize: input.error ? 16 : 20 } },
      ...inputProps.optional,
    };
  });

  return (
    <>
      <form
        className={classes.contactForm}
        onSubmit={(e) => {
          props.onSubmit(e);
        }}
      >
        {inputs.map((input) => (
          <TextField onChange={props.validate} variant="filled" {...input} />
        ))}

        {props.sent ? (
          <div className={classes.sending}>SENDING...</div>
        ) : (
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
            disabled={isFormValid ? false : true}
          >
            send form
          </Button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
