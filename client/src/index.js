import React from 'react';
import ReactDOM from 'react-dom';

//import services
import services from '../services';

//import child components
import App from './App';


ReactDOM.render(<App services={services}/>, document.getElementById('app'));