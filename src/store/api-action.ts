import { createAsyncThunk } from '@reduxjs/toolkit';
import { store, api } from '.';
import { ApiRoute, TIMEOUT_SHOW_ERROR } from '../components/utils/const';
import { CamerasType, PromoType, QueryArgumentType } from '../types/types';
import { loadCameras, loadPromo, setError } from './action';
import { errorHandle } from '../services/error-handle';

export const fetchCamerasList = createAsyncThunk(
  'data/fetchCamerasList',
  async (queryArgument?: QueryArgumentType | undefined) => {
    try {
      const {data} = await api.get<CamerasType>(
        `${ApiRoute.CamerasList}?_sort=${queryArgument?.sortType || 0}&_order=${queryArgument?.sortOrder || 0}&price_gte=${queryArgument?.priceGte || 0}&price_lte=${queryArgument?.priceLte || Infinity}`
      );
      store.dispatch(loadCameras(data));
    } catch(error) {
      errorHandle(error);
    }
  }
);

export const fetchPromo = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    try {
      const {data} = await api.get<PromoType>(ApiRoute.Promo);
      store.dispatch(loadPromo(data));
    } catch(error) {
      errorHandle(error);
    }
  }
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
