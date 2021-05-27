// import { LoaderOptionsPlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			favourites: [],
			token: ""
		},
		actions: {
			createUser: (name, last_name, email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					first_name: name,
					last_name: last_name,
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-moccasin-minnow-m823ors0.ws-us07.gitpod.io/user", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			login: (user, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: user,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3001-moccasin-minnow-m823ors0.ws-us07.gitpod.io/login", requestOptions)
					.then(response => response.text())
					.then(result => (store.token = result))
					.catch(error => console.log("error", error));
				console.log(result);
			},
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
					// try {
					// 	const res = await fetch("https://www.swapi.tech/api/planets");
					// 	const data = await res.json();
					// 	setStore({ planets: data.results });
					// } catch (error) {
					// 	console.log(error);
					// }
				};
				const obtenerPersonajes = async () => {
					// try {
					// 	const res = await fetch("https://www.swapi.tech/api/people");
					// 	const data = await res.json();
					// 	setStore({ people: data.results });
					// } catch (error) {
					// 	console.log(error);
					// }
				};
				// obtenerPlanetas();
				// obtenerPersonajes();
			}
		}
	};
};

export default getState;
