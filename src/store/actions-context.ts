import React from 'react';
import { ActionsContextProps } from '../interface/Context';

const contextProps: ActionsContextProps = {
  reportPage: () => {},
  reportProject: () => {},
  reportContactStatus: () => {},
  visitedPages: [],
  visitedProjects: [],
  contactStatus: { pending: undefined, error: undefined, sent: undefined },
};
export const ActionsContext = React.createContext(contextProps);
export default ActionsContext;
