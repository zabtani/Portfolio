import React from 'react';

export const ActionsContext = React.createContext({
  reportPage: () => {},
  reportProject: () => {},
});

export default ActionsContext;
