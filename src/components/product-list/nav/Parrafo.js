import React from 'react';
import useMessage from '../../../functions/useMessage'

const Parrafo = () => {
  const messages = useMessage();
  console.log(messages, 'es el arreglo dentro de parrafo', messages.length);
  const nav1 = messages.map((message, index) => (
    <li key={index} className="row nuevoparrafito">
      {message}
    </li>
  )
  )
  console.log(messages, 'el arreglo final')
  return (
    <ul>{nav1}</ul>
  )
}

export default Parrafo;