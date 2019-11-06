import React from 'react';
import Product from './Product'

function ProductList() {
  return (
    <div className="col-sm">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="d_Sandwich-tab" data-toggle="tab" href="#d_Sandwich" role="tab" aria-controls="d_Sandwich" aria-selected="true">Sandwich</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="d_Drink-tab" data-toggle="tab" href="#d_Drink" role="tab" aria-controls="d_Drink" aria-selected="false">Drink</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="d_Sandwich" role="tabpanel" aria-labelledby="d_Sandwich-tab"><Product/></div>
            <div className="tab-pane fade" id="d_Drink" role="tabpanel" aria-labelledby="d_Drink-tab">Lista de bebidas</div>
          </div>
        </div>

        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="a_Burger-tab" data-toggle="tab" href="#a_Burger" role="tab" aria-controls="a_Burger" aria-selected="true">Hamburguesa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_Accompaniment-tab" data-toggle="tab" href="#a_Accompaniment" role="tab" aria-controls="a_Accompaniment" aria-selected="false">Acompañamiento</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="a_Drink-tab" data-toggle="tab" href="#a_Drink" role="tab" aria-controls="a_Drink" aria-selected="false">Bebidas</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="a_Burger" role="tabpanel" aria-labelledby="a_Burger-tab">Lista de hamburguesas</div>
            <div className="tab-pane fade" id="a_Accompaniment" role="tabpanel" aria-labelledby="a_Accompaniment-tab">Lista de acompañamientos</div>
            <div className="tab-pane fade" id="a_Drink" role="tabpanel" aria-labelledby="a_Drink-tab">Lista de bebidas</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductList;