import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers/reducers';
import App from './components/App';

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
