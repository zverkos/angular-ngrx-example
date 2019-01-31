import { IUser } from '../models/user.models';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
}