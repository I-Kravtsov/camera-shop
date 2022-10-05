import { createReducer } from '@reduxjs/toolkit';
import { CamerasType } from '../types/types';
import { loadCameras } from './action';

type InitialStateType = {
  camerasList: CamerasType;
}

const initialState: InitialStateType = {
  camerasList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCameras, (state, action) => {
    state.camerasList = action.payload;
  });
});

export {reducer};
