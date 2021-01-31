import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalCSS from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </ BrowserRouter>
    <GlobalCSS />
  </>
)

export default App;
