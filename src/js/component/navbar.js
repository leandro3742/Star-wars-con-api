import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import gif from "../../img/git.gif";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	function alerta() {
		Swal.fire({
			title: "Sweet!",
			text: "Modal with a custom image.",
			imageUrl: gif,
			imageWidth: 500,
			imageHeight: 300,
			imageAlt: "Custom image"
		});
	}
	return (
		<nav className="navbar mb-3">
			<div className="col-3">
				<Link to="/">
					<img
						style={{ height: "75px" }}
						className="rounded"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHZkEBBMEdtbgZ0UbT3DW2HJ2OK8KlOqXKg&usqp=CAU"
					/>
				</Link>
			</div>
			<div className="col-6 d-flex justify-content-center">
				<button className="btn btn-primary" onClick={() => alerta()}>
					Ver trailer no oficial
				</button>
			</div>
			<div className="col-3">
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
						<div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
							{store.favourites.map((elem, indice) => {
								return (
									<div className="d-flex align-items-between align-items-center" key={indice}>
										<div className="d-flex justify-content-start">
											<span className="dropdown-item bg-dark text-light" href="#">
												{elem}
											</span>
										</div>
										<i
											onClick={() => actions.deleteFavourites(elem)}
											className="far fa-trash-alt pr-1 text-light"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
