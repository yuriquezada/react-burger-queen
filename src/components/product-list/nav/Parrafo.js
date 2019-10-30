import React from 'react';
import useMessage from '../../../functions/useMessage'

const Parrafo = () => {
  const messages = useMessage();
  console.log(messages, 'es el arreglo dentro de parrafo', messages.length);
  return (
    messages.map((message, index)=> (
      <div key={index} className="row nuevoparrafito">
        <p>{message}</p>
      </div>
    )
    )
  )
}

export default Parrafo;