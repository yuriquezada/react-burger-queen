import React from 'react';
import useMessage from '../../../functions/useMessage'

const Nav1 = () => {
  const messages = useMessage('menu');
  console.log(messages, 'es el arreglo dentro de Nav1', messages.length);
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      {messages.map((message, index) =>
        <li className="nav-item" key={index}>
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{message.name}</a>
        </li>
      )}
    </ul>
  );
};
export default Nav1;