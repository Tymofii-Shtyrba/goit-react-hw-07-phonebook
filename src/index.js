import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
