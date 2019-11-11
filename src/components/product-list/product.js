import React from 'react';
import useMessage from '../../functions/use-message'
import addOrder from '../../functions/add-order'

const Product = (props) => {
  const messages = useMessage(props.path);
  console.log(messages, 'es el arreglo dentro de Product', messages.length);
  return (
      messages.map((message, index) =>
        <div className="card" onClick={addOrder} key={index}>
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