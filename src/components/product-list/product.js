import React,  { useState } from 'react';
import useMessage from '../../functions/use-message'
// import handleClick from '../../functions/add-order'

const Product = (props) => {
  const messages = useMessage(props.path);
  console.log(messages, 'es el arreglo dentro de Product', messages.length);

  const [name, setName] = useState({firstName: ''});
  console.log(name)


  return (
    <div className="row ml-0 mr-0 py-3 px-4">{
      messages.map((message) =>
      <div className="p-3 col-xl-4 col-lg-6 col-md-6" value={name} onClick={()=>setName({firstName: message.item})} key={message.item} id={message.item}>
        <div className="card ">
          <img src={message.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{message.item}</h5>
          </div>
          <div className="card-footer d-flex justify-content-center flex-column align-items-center">
          <h5 className="card-title">$ {message.price}</h5>
            <a href="https://github.com/" className="btn btn-primary">Add</a>
          </div>
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