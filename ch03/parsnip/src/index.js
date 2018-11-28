import registerServiceWorker from './registerServiceWorker';
import { devToolsEnhancer } from 'redux-devtools-extension';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers';
import App from './App';
import './index.css';

const store = createStore(tasks, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
