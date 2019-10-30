import { useState, useEffect } from 'react';
import db from '../config/firebase'


const useMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listenForMessages();
  }, []);

  const listenForMessages = () => {
    db.collection('menu').get()
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
  console.log(messages, 'no sé que es')
  return messages;
}

export default useMessage;