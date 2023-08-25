import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { worker } from './mocks/browser';

import App from './App';
import Home from './pages/Home';
import Report from './pages/report';
import ReportOverview from './pages/report/Overview';
import './index.scss';

worker.start();
const domNode = document.getElementById('app')!;
ReactDOM.createRoot(domNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="report" element={<Report />}>
            <Route path="overview" element={<ReportOverview />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
