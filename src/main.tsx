import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import './index.scss';
import { worker } from './mocks/browser';
import Home from './pages/Home';
import Report from './pages/report';
import ReportOverview from './pages/report/Overview';

worker.start({
  serviceWorker: {
    url: '/ad-network-report/mockServiceWorker.js',
  },
});
const queryClient = new QueryClient();

const domNode = document.getElementById('app')!;
ReactDOM.createRoot(domNode).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/ad-network-report">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="report" element={<Report />}>
              <Route path="overview" element={<ReportOverview />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
