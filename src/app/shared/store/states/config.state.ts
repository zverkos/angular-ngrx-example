import { IConfig } from '../../sdk/models/config.models';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
