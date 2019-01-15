import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    SAMPLE_SERVER_BASE_URL,
    API_KEY,
    SESSION_ID,
    TOKEN
} from './config';


    function renderApp(credentials){
        ReactDOM.render(<App credentials={credentials}></App>, document.getElementById('root'));
    }

if(API_KEY && TOKEN && SESSION_ID){
    renderApp({
    apiKey: API_KEY,
    sessionId: SESSION_ID,
    token: TOKEN,
    })
}else{
    fetch(SAMPLE_SERVER_BASE_URL)
    .then(data => data.json())
    .then(renderApp)
    .catch(err =>{
        console.error('Failed to get session credentials', err);
        alert('Failed to get opentok sessionId and token. Make sure you have updated the config.js file.');
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
