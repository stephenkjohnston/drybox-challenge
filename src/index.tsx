import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from 'components/core/container/AppContainer';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);