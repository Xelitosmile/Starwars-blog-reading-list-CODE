import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Principal } from "./views/principal";
import { Planetas } from "./views/planetas";
import { Personajes } from "./views/personajes";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { InfoPlanetas } from "./views/infoplaneta";
import { InfoPersonajes } from "./views/infopersonaje";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Principal />
						</Route>
						<Route exact path="/planetas">
							<Planetas/>
						</Route>
						<Route exact path="/personajes">
							<Personajes/>
						</Route>
						<Route  exact path="/infoplaneta/:theid">
							<InfoPlanetas/>
						</Route>
						<Route  exact path="/infopersonaje/:theid">
							<InfoPersonajes/>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
