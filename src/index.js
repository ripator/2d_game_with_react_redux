import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./config/store";

ReactDOM.render(
    /*Provider component is HOC that is going
     to wrap our App component and provide it 
     with store
    */
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
