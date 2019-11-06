import { useState, useEffect } from 'react';
import db from '../config/firebase'

const useMessage = (path) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection(path)
    .onSnapshot((snapshot) => {
      const newMessages=snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))

      setMessages(newMessages);
    })
  }, [path]);

  // const listenForMessages = () => {

  // }
  console.log(messages, 'no sé que es')
  return messages;
}

export default useMessage;
