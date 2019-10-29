import React, { useState, useEffect } from 'react';

import './App.css';
import ProductList from './components/product-list/Product-list';
// import Parrafo from './components/Parrafo';
import db from './config/firebase'


/**------------------------------*/
const useMessage = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    listenForMessages();
  }, []);

  /*---------------------------**/

  const listenForMessages = () => {
    db.collection('/menu/').get()
      .then((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
          data.push(doc.id);

        });
        setMessages(data);
        console.log(data, 'este es el nuevo arreglo')
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  return messages;
}

function App() {
  const messages = useMessage()
  // console.log(messages.length)
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
        <p>{messages}</p>
      </div>
    </div>
  );
}




export default App;