// actions/toggleShowCurrentUserPhaseActions.ts
import { createAction } from '@reduxjs/toolkit';

export const toggleShowPhase = createAction<boolean>('phase/toggle');
