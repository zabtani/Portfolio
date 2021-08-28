const regex = {
  containSpecialChars: new RegExp(/[$&+,:;=?@#|'<>.^*()%!-]/),
  containDigit: new RegExp(/\d/),
  email: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
};

export function inputsReducer(state, action) {
  if (action.type === 'restart_inputs') {
    return { ...action.value };
  }
  const inputName = action.type;
  const value = action.value.replace(/ +(?= )/g, '').trim();
  let error = false;
  const errors = {
    tooShort: `${inputName} value is too short`,
    tooLong: `${inputName} value is too long`,
    empty: `Must fill ${inputName}`,
    invalid: `only valid ${inputName} format`,
    specialChars: `no special chars in ${inputName}`,
    digit: `remove digit from ${inputName}`,
  };
  if (!(state[inputName].notMust && value === '')) {
    if (value === '') {
      error = errors.empty;
    } else {
      switch (inputName) {
        case 'phone':
          if (value.length < 10) {
            error = errors.tooShort;
          } else if (value.length > 11) {
            error = errors.tooLong;
          }
          break;
        case 'email':
          if (!regex.email.test(value)) {
            error = errors.invalid;
          }
          break;
        case 'company':
        case 'name':
          if (regex.containSpecialChars.test(value)) {
            error = errors.specialChars;
          } else if (inputName === 'name' && regex.containDigit.test(value)) {
            error = errors.digit;
          } else if (value.length < 2) {
            error = errors.tooShort;
          } else if (value.length > 35) {
            error = errors.tooLong;
          }
          break;
        case 'message':
          if (value.length > 300) {
            error = errors.tooLong;
          }
          break;
        default:
          throw new Error(`no validation for ${inputName} input`);
      }
    }
  }

  return {
    ...state,
    [inputName]: {
      ...state[inputName],
      error: error,
      touch: true,
      fixedValue: value,
    },
  };
}
