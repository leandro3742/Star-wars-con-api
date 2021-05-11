// import { LoaderOptionsPlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			favourites: []
		},
		actions: {
			addFavourites: fav => {
				let store = getStore();
				setStore({ favourites: [...store.favourites, fav] });
			},
			deleteFavourites: fav => {
				function eliminarFav(arr) {
					if (arr === fav) return false;
					else return true;
				}
				let store = getStore();
				let arr = store.favourites.filter(eliminarFav);
				setStore({ favourites: arr });
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
						setStore({ people: data.results });
					} catch (error) {
						console.log(error);
					}
				};
				obtenerPlanetas();
				obtenerPersonajes();
			}
		}
	};
};

export default getState;
