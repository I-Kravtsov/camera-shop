import { createAction } from '@reduxjs/toolkit';
import { CamerasType } from '../types/types';

export const loadCameras = createAction<CamerasType>('data/loadQuests');


