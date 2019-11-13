import React from 'react';
import useMessage from '../../functions/use-message'
import handleClick from '../../functions/add-order'

const Product = (props) => {
  const messages = useMessage(props.path);
  console.log(messages, 'es el arreglo dentro de Product', messages.length);
  return (
    <div className="row">{
      messages.map((message, index) =>
        <div className="col-sm-4">
          <div className="card" onClick={handleClick} key={index}>
            <img src={message.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{message.item}</h5>
              <p className="card-text">$ {message.price}</p>
              <a href="https://github.com/" className="btn btn-primary">Add order</a>
            </div>
          </div>
        </div>
      )
    }</div>
  );
};
export default Product;

