import request from 'axios';
import { store } from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-action';
import { ErrorType } from '../types/error';
import { HttpCode } from '../components/utils/const';

export const errorHandle = (error: ErrorType): void => {
  if(!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if(response) {
    switch(response.status) {
      case HttpCode.BAD_REQUEST:
        handleError(response.statusText);
        break;
    }
    switch(response.status) {
      case HttpCode.NOT_FOUND:
        handleError(response.statusText);
        break;
    }
  }
};

