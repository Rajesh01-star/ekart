import React from "react";
import './Top.css'
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="navBar">
        <nav className="nav">
        <div className="left-nav">Shopping Cart</div>
        <div className="right-nav">
        <ul>
            <Link to = "/home"> <li>Home Page</li></Link>
            <Link to = "/cart"><li>Cart Page</li></Link>
            </ul>

        </div>
        </nav>
    </div>
  );
}

export default Top;