import React from 'react';



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
