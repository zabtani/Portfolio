import Features from '../enums/Features';
import { Techs } from '../enums/Techs';
import { Tools } from '../enums/Tools';

export interface ProjectData {
  name: string;
  description: JSX.Element;
  demoUrl?: string;
  sourceUrl: string;
  imgs: string[];
  techs: Techs[];
  tools: Tools[];
  /* prettier-ignore */
  features: Features[],
}
