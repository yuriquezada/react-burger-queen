import React from 'react';

import './App.css';
import ProductList from './product-list/Product-list';
import db from './config/firebase'
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


db.collection('menu').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  
export default App;
