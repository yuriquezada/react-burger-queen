import { useState, useEffect } from 'react';
import db from '../config/firebase'

const useMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    listenForMessages();
  }, []);

  const listenForMessages = () => {
    db.collection('menu')
      .onSnapshot((snapshot) => {
        const newMessages=snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }))

        // const data = [];
        // snapshot.forEach((doc) => {
        //   data.push(doc.id);
        // });
        setMessages(newMessages);
        // // console.log(data, 'este es el nuevo arreglo')
      })
  }
  console.log(messages, 'no sé que es')
  return messages;
}

export default useMessage;

// const listenForMessages = () => {
//   firestore.collection('messages')
//     .onSnapshot((snapshot) => {
//       // Loop through the snapshot and collect
//       // the necessary info we need. Then push
//       // it into our array
//       const allMessages = [];
//       snapshot.forEach((doc) => allMessages.push(doc.data()));

//       // Set the collected array as our state
//       setMessages(allMessages);
//     }, (error) => console.error(error));
// };

// const useMessage = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     listenForMessages();
//   }, []);

//   const listenForMessages = () => {
//     db.collection('menu').get()
//       .then((snapshot) => {
//         const data = [];
//         snapshot.forEach((doc) => {
//           data.push(doc.id);
//         });
//         setMessages(data);
//         console.log(data, 'este es el nuevo arreglo')
//       })
//       .catch((err) => {
//         console.log('Error getting documents', err);
//       });
//   }
//   console.log(messages, 'no sé que es')
//   return messages;
// }
