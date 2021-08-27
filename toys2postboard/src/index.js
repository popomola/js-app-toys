import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyCzHttCI6x0wYahUcYdXSCh7nhuOxZ7Y",
  authDomain: "simplechat-b9d5b.firebaseapp.com",
  projectId: "simplechat-b9d5b",
  storageBucket: "simplechat-b9d5b.appspot.com",
  messagingSenderId: "90500831529",
  appId: "1:90500831529:web:24df8eff92b8c14512bf38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
