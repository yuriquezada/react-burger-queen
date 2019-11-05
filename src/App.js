import React from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
import Nav1 from './components/product-list/nav/Nav1';
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
      <Nav1/>
    </div>
  );
}

export default App;