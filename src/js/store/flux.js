// import { LoaderOptionsPlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	let arr = [];
	return {
		store: {
			planets: [],
			people: [],
			arrPerson: [],
			favourites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const obtenerPlanetas = async () => {
					try {
						const res = await fetch("https://www.swapi.tech/api/planets");
						const data = await res.json();
						setStore({ planets: data.results });
					} catch (error) {
						console.log(error);
					}
				};
				const obtenerPersonajes = async () => {
					try {
						const res = await fetch("https://www.swapi.tech/api/people");
						const data = await res.json();
						arr = data.results;
						console.log(arr);
						setStore({ people: data.results });
						llamarLoop();
					} catch (error) {
						console.log(error);
					}
				};

				const moreInfo = async indice => {
					try {
						const res = await fetch("https://www.swapi.tech/api/people/" + indice);
						const data = await res.json();
						let aux = data.result.properties;
						arr.push(aux);
						setStore({ arrPerson: arr });
					} catch (error) {
						console.log(error);
					}
				};
				obtenerPlanetas();
				obtenerPersonajes();
				for (let i = 0; i < 10; i++) {
					moreInfo(i + 1);
				}
			}
		}
	};
};

export default getState;
