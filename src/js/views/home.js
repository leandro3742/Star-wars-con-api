import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

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
							<div className="d-flex">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVvBeh-F-6oZ7qVVpVY8IU_vbZNgzzgLlRw&usqp=CAU" />
							</div>
							<h5 className="card-title d-flex justify-content-center">{elem.name}</h5>
							<h6 className="text-muted">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis blanditiis
								reprehenderit, ab sequi magnam. Laudantium minima culpa repellat magni non beatae modi?
								Animi odit, ea deleniti nostrum delectus fugiat.
							</h6>
							<div className="d-flex justify-content-between">
								<Link to={`/person/${indice + 1}`} className="card-link">
									More info+
								</Link>
								<button
									onClick={() => {
										actions.addFavourites(elem.name);
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
