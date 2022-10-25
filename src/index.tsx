import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import { fetchPromo, fetchCamerasList } from './store/api-action';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchCamerasList());
store.dispatch(fetchPromo());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
);
