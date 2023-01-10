import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/app/App";
import CardA from "./components/card-class/CardA";


const app = document.getElementById('root');
const main = ReactDOM.createRoot(app);

// display page
main.render(
  <div>
    <h1>Welcome to React</h1>
    <App />
    <CardA />
  </div>
)





















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/app/App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
