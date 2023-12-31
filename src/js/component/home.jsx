import React from "react";
import Navbar from "./Navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Intro from "./Intro.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="mb-5">
			<>
				< Navbar />

				<div className="mb-3">
					<Intro />
				</div>

				<div className="row container-fluid justify-content-between m-auto">
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
			</>

		</div>
	);
};

export default Home;
