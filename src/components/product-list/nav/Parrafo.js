import React from 'react';
import useMessage from '../../../functions/useMessage'

const Parrafo = () => {
  const messages = useMessage();
  console.log(messages, 'es el arreglo dentro de parrafo', messages.length);
  return messages.map((message, index) => (
    <li key={index} className="row nuevoparrafito">
      {message}
    </li>
  ));
};
export default Parrafo;