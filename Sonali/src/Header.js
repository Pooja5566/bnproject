import * as React from "react";
import "./App.css";
import logo from './image/bn.png';
import icon from './icon/lkn.png';




function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <a href="https://www.linkedin.com/in/bhavishyanirman/" target="_blank"> 

        <img className="image" src={icon }/>
        </a>
        </div>
        <div>
          <a href className="bn">
            info@bhavishyanirman.com
          </a>
        </div>
        <div>
          <button>9899550700</button>
        </div>
      </header>
      <header className="App-header1">
        <div>
          <img className="image" src={logo }></img>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Projects</a>
          <a href="/">Blogs</a>
          <a href="/">Gallary</a>
          <a href="/">Contact Us</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
