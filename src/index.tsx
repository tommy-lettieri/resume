import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

const { REACT_APP_GA_TRACKING_CODE } = process.env;
if (REACT_APP_GA_TRACKING_CODE) {
    // Just have this for debugging, will probably remove
    (window as any).REACT_APP_GA_TRACKING_CODE = REACT_APP_GA_TRACKING_CODE;
    ReactGA.initialize(REACT_APP_GA_TRACKING_CODE);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
