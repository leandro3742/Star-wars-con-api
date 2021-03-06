import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planets = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	const [datos, setDatos] = useState([]);
	const llamarCharacter = async () => {
		try {
			const res = await fetch("https://www.swapi.tech/api/planets/" + id);
			const data = await res.json();
			setDatos(data.result.properties);
		} catch (error) {
			console.log(error);
		}
	};
	// llamarCharacter();
	useEffect(() => {
		llamarCharacter();
	}, []);

	const estiloLineaDivisoria = {
		width: "90%",
		marginLeft: "5%",
		height: "2px",
		backgroundColor: "red",
		marginTop: "25px",
		borderRadius: "10px"
	};
	return (
		<React.Fragment>
			<div className="d-flex justify-content-between">
				<img
					src="https://i.blogs.es/1baf64/star-wars-ultimo-trailer/1366_2000.jpeg"
					style={{ width: "500px", borderRadius: "15px" }}
				/>
				<div className="m-4 text-white">
					<h3 className="text-center">{datos.name}</h3>
					<h6 className="text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum nostrum earum quod? Facere
						dolor harum tempore maiores provident velit non, rerum, quidem dolores, labore beatae! Illum
						alias praesentium sequi! Aliquid eligendi saepe hic similique, quae reiciendis. Necessitatibus
						consequuntur fuga doloribus quasi? Aliquam fugiat exercitationem hic corrupti ab, quas provident
						voluptatem pariatur aut voluptates saepe quam reiciendis ipsa eligendi consequatur? Ad, mollitia
						velit aut nesciunt nisi cumque deleniti laborum, esse pariatur explicabo veritatis quisquam. Aut
						magni ex modi eius rem, asperiores quod neque, laudantium esse ipsum pariatur! Iusto, facilis
						deserunt. Possimus quas beatae asperiores inventore laborum ducimus? Reiciendis dolore soluta
						maiores facere a sed
					</h6>
				</div>
			</div>
			<div style={estiloLineaDivisoria} />
			<div style={{ marginLeft: "5%" }} className="d-flex justify-content-center text-danger">
				<div className="d-flex flex-column align-items-center mx-3">
					<h6>Diametro</h6>
					<h6 className="ml-2">{datos.diameter}</h6>
				</div>
				<div className="d-flex flex-column align-items-center mx-3 text-danger">
					<h6>Periodo de rotacion</h6>
					<h6 className="ml-2">{datos.rotation_period}</h6>
				</div>
				<div className="d-flex flex-column align-items-center mx-3 text-danger">
					<h6>periodo de orbitacion</h6>
					<h6 className="ml-2">{datos.orbital_period}</h6>
				</div>
				<div className="d-flex flex-column align-items-center mx-3 text-danger">
					<h6>Gravedad</h6>
					<h6 className="ml-2">{datos.gravity}</h6>
				</div>
				<div className="d-flex flex-column align-items-center mx-3 text-danger">
					<h6>Poblacion</h6>
					<h6 className="ml-2">{datos.population}</h6>
				</div>
				<div className="d-flex flex-column align-items-center mx-3 text-danger">
					<h6>Clima</h6>
					<h6 className="ml-2">{datos.climate}</h6>
				</div>
			</div>
		</React.Fragment>
	);
};
