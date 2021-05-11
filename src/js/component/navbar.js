import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					style={{ height: "75px" }}
					className="rounded"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHZkEBBMEdtbgZ0UbT3DW2HJ2OK8KlOqXKg&usqp=CAU"
				/>
			</Link>
			<div className="ml-auto">
				<div style={{ marginRight: "100px" }} className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle btn btn-outline-primary"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						{store.favourites.map((elem, indice) => {
							return (
								<div className="d-flex align-items-between align-items-center" key={indice}>
									<div className="d-flex justify-content-start">
										<span className="dropdown-item" href="#">
											{elem}
										</span>
									</div>
									<i
										onClick={() => actions.deleteFavourites(elem)}
										className="far fa-trash-alt pr-1"
									/>
								</div>
							);
						})}
						{/* <a className="dropdown-item" href="#">
							Action
						</a> */}
						{/* <a className="dropdown-item" href="#">
							Another action
						</a> */}
						{/* <div className="dropdown-divider" /> */}
						{/* <a className="dropdown-item" href="#">
							Something else here
						</a> */}
					</div>
				</div>
			</div>
		</nav>
	);
};
