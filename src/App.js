import React from 'react';

import './App.css';
import ProductList from './components/product-list/product-list';
import OrderList from './components/product-order/order-list';
// import Product from './components/product-list/Product';
// import db from './config/firebase'



const App = ()=>{
    return (
    <div className="App">
      <p>BURGER QUEEN</p>
      <div className="row">
        <ProductList />
        <OrderList />
      </div>
    </div>
  );
}

export default App;