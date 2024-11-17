import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><i className="fa fa-address-book text-success" style={{ fontSize: '30px' }}></i></span>
			</Link>
			<div className="ml-auto">
				<Link to="/create">
					<button className="btn-success mx-3">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
