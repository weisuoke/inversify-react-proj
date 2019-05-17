import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/style/main.css'
import { Provider } from 'react-redux'
import configureStore from "./redux/store";
import AppRouter from './router'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>,
  document.getElementById('root')
);
