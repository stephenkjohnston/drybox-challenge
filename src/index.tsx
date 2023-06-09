import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from 'components/core/container/AppContainer';
import { RecoilRoot } from 'recoil';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <AppContainer />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);