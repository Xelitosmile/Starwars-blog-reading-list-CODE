import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/swlogo.png";


export const Navbar = () => {
	return (
		<div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">

      <Link to="/">
      <img src={Logo} id="starwarnav"></img>
      </Link>

      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
    </div>
  </div>
	);
};
