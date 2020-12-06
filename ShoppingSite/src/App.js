import * as React from 'react';
import { hot } from 'react-hot-loader';

import './assets/scss/App.scss';
import { ThemeProvider } from '@material-ui/core';
import getTheme from './assets/themes';
import Routes from './routes';

function App() {
  return (
    <div className="App"> 
      <ThemeProvider theme={getTheme()}>
        <React.Suspense fallback={null}>
          <Routes/>
        </React.Suspense>
      </ThemeProvider>
    </div>
  );
}


export default hot(module)(App);
