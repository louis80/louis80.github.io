import ReactGA from 'react-ga';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactGA.initialize('G-VYJT4TRYGN'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);*/

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
