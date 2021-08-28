import { useEffect, useReducer } from 'react';
import ActionsContext from './actions-context';
import {
  setLocalStorage,
  initialActionsState,
  parseDataArr,
} from './actions-helper';
function actionsReducer(state, action) {
  if (action.type === 'REPORT_CONTACT_STATUS') {
    let changedStatus = action.value;
    return {
      ...state,
      contactStatus: { ...state.contactStatus, ...changedStatus },
    };
  } else {
    let key;
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

export const ActionsProvider = (props) => {
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

  const reportPageHandler = (pageName) => {
    if (
      actionsState.pages.includes(pageName) ||
      pageName === 'welcome' ||
      pageName === 'contact'
    )
      return;
    dispatchActions({ type: 'REPORT_PAGE', value: pageName });
  };
  const reportProjectHandler = (projectName) => {
    if (actionsState.projects.includes(projectName)) return;
    dispatchActions({ type: 'REPORT_PROJECT', value: projectName });
  };
  const reportContactStatusHandler = (status) => {
    dispatchActions({ type: 'REPORT_CONTACT_STATUS', value: status });
  };
  const actionsContext = {
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
