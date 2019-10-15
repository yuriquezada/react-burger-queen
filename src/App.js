import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function Saludo(){
//   return(
//     <div>Holaaaaaaaaaaaaaa</div>
//   );
// }

function App() {
  return (
    <div className="App">
      <p>LATAM AIRLINES</p>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">lorem</div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">ipsum</div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">turis</div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><Saludo/></p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ahora mismo
        </a>
      </header> */}
    </div>
  );
}

export default App;
