import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/Base.css';

import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

// The main application js file es6 import
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
