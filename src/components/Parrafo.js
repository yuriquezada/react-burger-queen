import React, { useState, useEffect } from 'react';
import db from '../config/firebase'


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

const Parrafo = () => {
  const messages = useMessage();
  return (
    <div className="row nuevoparrafito">
      <p>{messages}</p>
    </div>
  )
}

export default Parrafo;