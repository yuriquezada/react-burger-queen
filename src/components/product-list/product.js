import React from 'react';
import useMessage from '../../functions/use-message'
import handleClick from '../../functions/add-order'

const Product = (props) => {
  const messages = useMessage(props.path);
  console.log(messages, 'es el arreglo dentro de Product', messages.length);
  return (
    <div className="card-deck">{
      messages.map((message, index) =>
        <div className="card col-lg-4 col-md-6" onClick={handleClick} key={index}>
          <img src={message.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{message.item}</h5>
          </div>
          <div className="card-footer d-flex justify-content-center flex-column align-items-center">
          <h5 className="card-title">$ {message.price}</h5>
            <a href="https://github.com/" className="btn btn-primary">Add</a>
          </div>
        </div>
      )
    }</div>

  );
};
export default Product;

// <div className="card" onClick={handleClick} key={index}>
//   <img src="..." className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{message.item}</h5>
//     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//   </div>
//   <div className="card-footer">
//     <small className="text-muted">Last updated 3 mins ago</small>
//     <a href="https://github.com/" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>