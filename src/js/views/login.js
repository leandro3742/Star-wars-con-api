import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const login = e => {
		e.preventDefault();
		console.log("Llega");
		let user = e.target.email.value;
		let pass = e.target.password.value;

		actions.login(user, pass);
		// console.log(user);
	};

	console.log(store.token);
	return (
		<div className="d-flex flex-column align-items-center">
			<h2 className="text-white">Iniciar sesion</h2>
			<form onSubmit={login}>
				<div className="form-group row">
					<div className="col-sm-12">
						<input type="email" placeHolder="Ingrese su mail" className="form-control" id="email" />
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-12">
						<input
							type="password"
							placeHolder="Ingrese su password"
							className="form-control"
							id="password"
						/>
					</div>
				</div>
				<button className="btn btn-primary">Iniciar sesion</button>
			</form>

			<h2 className="my-2 text-white">O</h2>
			<button className="btn btn-sm btn-warning">Regristrarme</button>
		</div>
	);
};
