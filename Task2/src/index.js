import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import "bootstrap/dist/css/bootstrap.css";
import data from './content/Content1';
ReactDOM.render(
    <App/>
    ,
  document.getElementById('root')
);
ReactDOM.render(
  <data/>
  ,
document.getElementById('root1')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
