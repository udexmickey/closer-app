import { createAction } from '@reduxjs/toolkit';

export const setCurrentUser = createAction<IUser>('user/set');

export interface IUser {
  id: string;
  name: string;
  // Other user details...
}
