import { UserActions } from '../interface/Context';

export const setLocalStorage = (key: string, value: UserActions) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e: any) {
    throw new Error(e);
  }
};
const getLocalStorage = (key: string, initialValue: UserActions) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};
export const parseDataArr = (data: string[] | string) => {
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
const defaultActionsState: UserActions = {
  projects: [],
  pages: [],
};
export const initialActionsState = getLocalStorage(
  'actions_data',
  defaultActionsState
);
