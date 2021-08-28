export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw new Error(e);
  }
};
const getLocalStorage = (key, initialValue) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};
export const parseDataArr = (data) => {
  let parsedData;
  if (data.length === 0) {
    parsedData = 'seen nothing';
  } else {
    parsedData = JSON.stringify(data);
    parsedData = parsedData.substring(1, parsedData.length - 1);
    parsedData = parsedData.replaceAll('"', ' ');
  }
  return parsedData;
};
const defaultActionsState = {
  projects: [],
  pages: [],
};
export const initialActionsState = getLocalStorage(
  'actions_data',
  defaultActionsState
);
