import { createReducer } from '@reduxjs/toolkit';
// import { ErrorType } from '../types/error';
import { CamerasType, PromoType, QueryArgumentType } from '../types/types';
import { loadCameras, loadPromo, setError, setSortType, setSortOrder } from './action';

type InitialStateType = {
  isDataLoaded: boolean;
  camerasList: CamerasType;
  promo: PromoType;
  error: string;
  queryArgument: QueryArgumentType;
}

const initialState: InitialStateType = {
  isDataLoaded: false,
  camerasList: [],
  promo: {
    id: 0,
    name: '',
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  },
  error: '',
  queryArgument: {
    sortType: '',
    sortOrder: '',
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCameras, (state, action) => {
      state.camerasList = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.queryArgument.sortType = action.payload;
    })
    .addCase(setSortOrder, (state, action) => {
      state.queryArgument.sortOrder = action.payload;
    });
});

export {reducer};
