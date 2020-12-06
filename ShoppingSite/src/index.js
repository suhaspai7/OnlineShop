import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { StateProvider } from './pages/stateProvider'
import reducer, { initialState } from './pages/reducer'




ReactDOM.render(  
<StateProvider initialState={initialState} reducer={reducer}>
  <Router>
    <App />
  </Router>
</StateProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
