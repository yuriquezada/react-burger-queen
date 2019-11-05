import React from 'react';
import useMessage from '../../../functions/useMessage'

const Parrafo = () => {
  const messages = useMessage();
  console.log(messages, 'es el arreglo dentro de parrafo', messages.length);
  // console.log(messages.category);
  return (
    <ul>
      {messages.map((message, index)=>
        <li key={index}>
          {message.item}
        </li>
        )}
    </ul>
  );
};
export default Parrafo;