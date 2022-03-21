import { useEffect, useReducer } from 'react';
import { ActionsContextProps, ContactStatus } from '../interface/Context';

import ActionsContext from './actions-context';
import {
  setLocalStorage,
  initialActionsState,
  parseDataArr,
} from './actions-helper';
function actionsReducer(state: any, action: { type: string; value: any }) {
  if (action.type === 'REPORT_CONTACT_STATUS') {
    let changedStatus = action.value;
    return {
      ...state,
      contactStatus: { ...state.contactStatus, ...changedStatus },
    };
  } else {
    let key: string;
    let reporetedValue = action.value;
    switch (action.type) {
      case 'REPORT_PAGE':
        key = 'pages';
        break;
      case 'REPORT_PROJECT':
        key = 'projects';
        break;
      default:
        throw new Error('failed to save action data');
    }
    return {
      ...state,
      [key]: [...state[key], reporetedValue],
    };
  }
}

export const ActionsProvider = (props: any) => {
  const [actionsState, dispatchActions] = useReducer(actionsReducer, {
    ...initialActionsState,
    contactStatus: { error: false, sent: false, pending: false },
  });
  useEffect(() => {
    setLocalStorage('actions_data', {
      projects: actionsState.projects,
      pages: actionsState.pages,
    });
  }, [actionsState.projects, actionsState.pages]);

  const reportPageHandler = (pageName: string) => {
    if (
      actionsState.pages.includes(pageName) ||
      pageName === 'welcome' ||
      pageName === 'contact'
    )
      return;
    dispatchActions({ type: 'REPORT_PAGE', value: pageName });
  };
  const reportProjectHandler = (projectName: string) => {
    if (actionsState.projects.includes(projectName)) return;
    dispatchActions({ type: 'REPORT_PROJECT', value: projectName });
  };
  const reportContactStatusHandler = (status: ContactStatus) => {
    dispatchActions({ type: 'REPORT_CONTACT_STATUS', value: status });
  };
  const actionsContext: ActionsContextProps = {
    visitedPages: parseDataArr(actionsState.pages),
    visitedProjects: parseDataArr(actionsState.projects),
    contactStatus: actionsState.contactStatus,
    reportPage: reportPageHandler,
    reportProject: reportProjectHandler,
    reportContactStatus: reportContactStatusHandler,
  };

  return (
    <ActionsContext.Provider value={actionsContext}>
      {props.children}
    </ActionsContext.Provider>
  );
};

export default ActionsContext;
