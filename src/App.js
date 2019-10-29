import React from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
// import Parrafo from './components/Parrafo';
import db from './config/firebase'

db.collection('/menu/').get()
  .then((snapshot) => {
    const data = [];
    snapshot.forEach((doc) => {
      data.push(doc.id);

    });
    console.log(data, 'este es el nuevo arreglo')
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

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
      <div className="row">
        
      </div>
    </div>
  );
}




export default App;