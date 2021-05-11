import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

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
	return (
		<div style={styleContainer} className="d-flex">
			{store.people.map((elem, indice) => {
				return (
					<div key={indice}>
						<Card props={elem} />
					</div>
				);
			})}
		</div>
	);
};
