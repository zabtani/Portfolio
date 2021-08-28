import { TextField, Button } from '@material-ui/core';
import classes from './Contact.module.css';
import ActionsContext from '../../store/ActionsProvider';
import { useRef, useContext, useReducer } from 'react';
import { inputsReducer } from './inputs-reducer';
const ContactForm = (props) => {
  const baseInputState = { fixedValue: null, error: false, touch: false };
  const iniInputsState = {
    name: { ...baseInputState, ref: useRef() },
    company: { ...baseInputState, ref: useRef() },
    phone: { ...baseInputState, ref: useRef(), notMust: true },
    email: { ...baseInputState, ref: useRef() },
    message: { ...baseInputState, ref: useRef() },
  };
  const [inputsState, dispatchForm] = useReducer(inputsReducer, iniInputsState);
  const validateInput = (e) => {
    dispatchForm({ type: e.target.name, value: e.target.value });
  };
  const actionsCtx = useContext(ActionsContext);
  const fixValue = (ref, fixedValue) => {
    ref.current.value = fixedValue;
  };
  const inputs = Object.entries(inputsState).map((input) => {
    let inputProps;
    switch (input[0]) {
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
      inputRef: input[1].ref,
      name: input[0],
      key: input[0],
      error: !input[1].error ? false : true,
      label: input[1].error ? input[1].error : inputProps.label,
      onBlur: fixValue.bind(null, input[1].ref, input[1].fixedValue),
      InputLabelProps: { style: { fontSize: input[1].error ? 16 : 20 } },
      ...inputProps.optional,
    };
  });
  const checkValidaity = () => {
    let formValidity = true;
    for (let inputName in inputsState) {
      const input = inputsState[inputName];
      const inputIsValid =
        (!input.error && input.touch) || (!input.error && input.notMust);
      if (!inputIsValid) {
        formValidity = false;
      }
    }
    return formValidity;
  };
  const isFormValid = checkValidaity();
  return (
    <>
      <form
        className={classes.contactForm}
        onSubmit={(e) => {
          props.onSubmit(e);
          dispatchForm({ type: 'restart_inputs', value: iniInputsState });
        }}
      >
        {/* prettier-ignore */}
        <input  className={classes.secretInput} readOnly name="visited_pages" value={actionsCtx.visitedPages} />
        {/* prettier-ignore */}
        <input className={classes.secretInput} readOnly  name="visited_projects" value={actionsCtx.visitedProjects} />
        {inputs.map((input) => (
          <TextField onChange={validateInput} variant="filled" {...input} />
        ))}
        {
          /* prettier-ignore */ props.onProcess ? <div className={classes.sending}>SENDING...</div> : 
          <Button className={classes.submitButton} type="submit" variant="contained"
          color="primary" disabled={isFormValid ? false : true} >send form </Button>
        }
        <span className={classes.dataNotification}>
          this form will send me additional data about pages and projects you
          visited.
        </span>
      </form>
    </>
  );
};

export default ContactForm;
