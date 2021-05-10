import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	// const [person, setPerson] = useState([]);

	const styleContainer = {
		overflowX: "scroll"
	};
	const styleCard = {
		width: "750px",
		border: "1px solid grey",
		borderRadius: "5px"
	};
	console.log(store.arrPerson);
	return (
		<div style={styleContainer} className="d-flex">
			{store.people.map((elem, indice) => {
				return (
					<div className="mx-3" style={styleCard} key={indice}>
						<div className="card-body" style={{ width: "350px" }}>
							<h5 className="card-title">{elem.name}</h5>
							<span>{store.arrPerson}</span>
							{/* <h6 className="card-subtitle mb-2 text-muted">Genero: {store.arrPerson[indice]}</h6> */}
							<h6 className="card-subtitle mb-2 text-muted">
								{/* Color de pelo: {store.arrPerson[indice].hair_color} */}
							</h6>
							<h6 className="card-subtitle mb-2 text-muted">
								{/* Date: {store.arrPerson[indice].birth_year} */}
							</h6>
							<div className="d-flex justify-content-between">
								<Link to={`/person/${indice}`} className="card-link">
									More info+
								</Link>
								<button
									onClick={() => {
										agregarFav(elem.name);
									}}
									className="btn btn-outline-warning">
									<i className="far fa-heart" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
