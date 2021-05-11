import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = props => {
	const elem = props;
	const { store, actions } = useContext(Context);

	const styleCard = {
		width: "350px",
		border: "1px solid grey",
		borderRadius: "5px"
	};

	return (
		<div className="card-body mx-3" style={styleCard}>
			<div className="d-flex">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVvBeh-F-6oZ7qVVpVY8IU_vbZNgzzgLlRw&usqp=CAU" />
			</div>
			<h5 className="card-title d-flex justify-content-center text-warning">{elem.props.name}</h5>
			<h6 className="text-muted">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis blanditiis reprehenderit,
				ab sequi magnam. Laudantium minima culpa repellat magni non beatae modi? Animi odit, ea deleniti nostrum
				delectus fugiat.
			</h6>
			<div className="d-flex justify-content-between">
				<Link to={`/${elem.tarjeta}/${elem.props.uid}`} className="card-link">
					More info+
				</Link>
				<button
					onClick={() => {
						actions.addFavourites(elem.props.name);
					}}
					className="btn btn-outline-warning">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};
