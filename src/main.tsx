import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { worker } from './mocks/browser';

import App from './App';
import Home from './pages/Home';
import Report from './pages/report';
import ReportOverview from './pages/report/Overview';
import './index.scss';

worker.start();
const queryClient = new QueryClient();

const domNode = document.getElementById('app')!;
ReactDOM.createRoot(domNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <QueryClientProvider client={queryClient}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="report" element={<Report />}>
              <Route path="overview" element={<ReportOverview />} />
            </Route>
          </Route>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
