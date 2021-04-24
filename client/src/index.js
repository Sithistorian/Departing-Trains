import React from 'react';
import ReactDOM from 'react-dom';

//import services
import services from '../services';

//import child components
import App from './App';


ReactDOM.render(<App requests={services.requests}/>, document.getElementById('app'));