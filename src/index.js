import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.css';
import './assets/animation.css';
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import './assets/style.css';

// Components
import App from './App';

AOS.init()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
