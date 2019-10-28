import React from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
import db from './config/firebase'
function App() {
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


db.collection('/menu/').get()
  .then((snapshot) => {
    const data = [];
    snapshot.forEach((doc) => {
      data.push(doc.id);
      console.log(data)
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });



// console.log(collectionsArray, 'aaaaaaaaaaaa')


export default App;
