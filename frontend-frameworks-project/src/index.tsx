import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
        </Route>
       </Routes>
     </BrowserRouter>
  </React.StrictMode>
);
