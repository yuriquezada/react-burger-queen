import { useState, useEffect } from 'react';
import db from '../config/firebase'

const useMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listenForMessages();
  }, []);

  const listenForMessages = () => {
    db.collection('/menu/menuA/drink')
      .onSnapshot((snapshot) => {
        const newMessages=snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }))

        setMessages(newMessages);
      })
  }
  console.log(messages, 'no sé que es')
  return messages;
}

export default useMessage;
