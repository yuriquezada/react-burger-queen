import React from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
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


const menuCollection = db.collection('/menu/').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, 'qqqq=>', doc.data());
      return doc.id
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

const collectionsArray=[];
collectionsArray.push(menuCollection);

console.log(collectionsArray, 'aaaaaaaaaaaa')
export default App;
