import React from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
import Parrafo from './components/product-list/nav/Parrafo';
// import db from './config/firebase'



const App = ()=>{
    return (
    <div className="App">
      <p>LATAM AIRLINES</p>
      <div className="row">
        <ProductList />
        <div className="col-sm">
          One of three columns
        </div>
      </div>
      
      <Parrafo/>
    </div>
  );
}

export default App;