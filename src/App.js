import React from 'react';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import './App.css';
import ProductList from './product-list/Product-list';

function App() {
  return (
    <div className="App">
      <p>LATAM AIRLINES</p>
      <div className="row">
        <ProductList/>
        <div className="col-sm">
          One of three columns
        </div>
      </div>
    </div>
  );
}

export default App;
