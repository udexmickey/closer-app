import { createAction } from '@reduxjs/toolkit';

export const toggleNotifications = createAction<boolean>('notifications/toggle');
