import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<div style={{ overflowX: "scroll" }} className="mt-5">
				<h2 className="text-warning ml-2">Character</h2>
				<div className="mt-2 d-flex">
					{store.people.map((elem, indice) => {
						return (
							<div key={indice}>
								<Card props={elem} tarjeta={"people"} />
							</div>
						);
					})}
				</div>
			</div>

			<div style={{ overflowX: "scroll" }} className="mt-5">
				<h2 className="text-danger ml-2">Planets</h2>
				<div className="d-flex mt-2">
					{store.planets.map((elem, indice) => {
						return (
							<div key={indice}>
								<Card props={elem} tarjeta={"planets"} />
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};
