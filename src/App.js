import React from 'react';
import './App.css';
import Header from './components/Header'
import ProductList from './components/product-list/product-list';
import OrderList from './components/product-order/order-list';
// import Product from './components/product-list/Product';
// import db from './config/firebase'



const App = ()=>{
    return (
    <div className="App">
      <Header />
      <div className="row">
        <ProductList />
        <OrderList />
      </div>
    </div>
  );
}

export default App;