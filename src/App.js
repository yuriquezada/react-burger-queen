import React from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
// import Product from './components/product-list/Product';
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
    </div>
  );
}

export default App;