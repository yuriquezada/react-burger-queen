import React from 'react';
import useMessage from '../../../functions/useMessage'

const Product = () => {
  const messages = useMessage('/menu/menuA/sandwich');
  console.log(messages, 'es el arreglo dentro de Product', messages.length);
  return (
      messages.map((message, index) =>
        <div className="card"  key={index}>
          <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{message.item}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
          )
      );
      };
export default Product;