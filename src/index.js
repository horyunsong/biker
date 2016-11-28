import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect} from 'react-router';
import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={App}/>
  </Router>
  ),
  document.getElementById('root'));
