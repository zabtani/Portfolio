export interface ActionsContextProps {
  visitedPages: string[] | string;
  visitedProjects: string[] | string;
  contactStatus: ContactStatus;
  reportPage: (pageName: string) => void;
  reportProject: (projectName: string) => void;
  reportContactStatus: (status: ContactStatus) => void;
}
export interface UserActions {
  pages: string[];
  projects: string[];
}
export interface ContactStatus {
  error?: boolean;
  sent?: boolean;
  pending?: boolean;
}
