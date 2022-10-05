import { createAsyncThunk } from '@reduxjs/toolkit';
import { store, api } from '.';
import { CamerasType } from '../types/types';
import { loadCameras } from './action';

export const fetchCamerasList = createAsyncThunk(
  'data/fetchCamerasList',
  async () => {
    const {data} = await api.get<CamerasType>('/cameras');
    store.dispatch(loadCameras(data));
  }
);
