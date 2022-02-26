import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles.css';
import { store } from './store';
import WhiteboardTest from './pages/WhiteboardTest';


ReactDOM.render(
  <Provider store={store}>
    <WhiteboardTest />
  </Provider>,
  document.querySelector('#root')
);
