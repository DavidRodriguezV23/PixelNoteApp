import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Conexión con firebase
const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyDNBatqRmKdPCFCwSN-FbIxTDglwrgH3lc',
  authDomain: 'pixelnotes-e804e.firebaseapp.com',
  projectId: 'pixelnotes-e804e',
  storageBucket: 'pixelnotes-e804e.appspot.com',
  messagingSenderId: '1054327160544',
  appId: '1:1054327160544:web:950870e9eda50f73a49a85',
}

firebase.default.initializeApp(firebaseConfig);

// Renderiza y genera el return dentro de un div

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('pixelnote-container'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

