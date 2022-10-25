import { createAction } from '@reduxjs/toolkit';
import { CamerasType, PromoType } from '../types/types';

export const loadCameras = createAction<CamerasType>('data/loadCameras');
export const loadPromo = createAction<PromoType>('data/loadPromo');
export const setError = createAction<string>('setError');
export const setSortType = createAction<string>('setSortType');
export const setSortOrder = createAction<string>('setSortOrder');

