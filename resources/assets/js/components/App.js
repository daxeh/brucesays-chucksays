import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../styles/base.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './../utils/registerServiceWorker';

// The main application js file es6 import
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
