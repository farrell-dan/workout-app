import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import styled from "styled-components";

import NavBar from "./NavBar/NavBar";
import HomePage from "./HomePage/HomePage";
import CalendarSection from "./Calendar/Calendar";

const App = () => {
	return (
		<Router>
			<NavBar/>
			<Switch>
				<Route path="/" element={< HomePage/>} />
				<Route path="/workouts" element={<h1>Your workouts</h1>} />
				<Route path="/calendar" element={< CalendarSection/>} />
			</Switch>
		</Router>
	);
};

export default App;
