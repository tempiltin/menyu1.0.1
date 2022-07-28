import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap-grid.css'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('_p_r_o_g_r_o_o_t_'));
root.render(
    <BrowserRouter >
    <App />
    </BrowserRouter>
);