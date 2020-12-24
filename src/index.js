import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./Routes/Home/Home"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import configureStore, { history } from "./Store/store"
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} history={history}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
