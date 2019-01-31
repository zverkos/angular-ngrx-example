import { IConfig } from '../models/config.models';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
}