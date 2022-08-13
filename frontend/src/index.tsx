import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import { SideBar } from './components/SideBar/SideBar';
import { Login } from './pages/Login/login';
import { PageA } from "./pages/PageA/pageA";
import { PageB } from "./pages/PageB/pageB";
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="pagea" element={<PageA />}/>
          <Route path="pageb" element={<PageB />}/>
          <Route path="login" element={<Login />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
