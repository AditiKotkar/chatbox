import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from './Chat';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
            <Route path="/" element={<App />} />
            <Route path="Chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();

