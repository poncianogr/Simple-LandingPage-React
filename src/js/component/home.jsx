import React from "react";
//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<br />
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hippocrates_pushkin02.jpg/200px-Hippocrates_pushkin02.jpg"
							cardTitle="Hipócrates"
							cardDescription="Hipócrates, conocido como el <<padre de la medicina>> vivió entre el 460 y el 370 a.C. Creó la medicina tal y como la conocemos y creó el <<juramento hipocrático>> que sigue vigente hasta nuestros días."
							buttonUrl="https://es.wikipedia.org/wiki/Hipócrates"
							buttonLabel="Ir a Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg"
							cardTitle="Aristóteles"
							cardDescription="Aristóteles vivió durante el Siglo IV a.C. En sus trabajos embriológicos describió el primer signo del embrión y el desarrollo del corazón y los grandes vasos, sostuvo que los fetos no respiran por sí mismos, fue el primero en observar latidos cardiacos del embrión, así como algunas diferencias entre las arterias y las venas, dio su nombre a la arteria Aorta y describió el trayecto del uréter. Pensaba que la inteligencia se localizaba en el corazón."
							buttonUrl="https://es.wikipedia.org/wiki/Aristóteles"
							buttonLabel="Ir a Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/220px-Francesco_Melzi_-_Portrait_of_Leonardo.png"
							cardTitle="Leonardo da Vinci"
							cardDescription="Leonardo da Vinci vivió en el siglo XV y parte del XVI. En sus obras más representativas de las partes del cuerpo se pueden observar cráneos, flexos braquiales, úteros, aparatos reproductores tanto femeninos como masculinos, trompas de Falopio, fetos dentro del útero, músculos del tórax, extremidades, corazones, pulmones y órganos del abdomen."
							buttonUrl="https://es.wikipedia.org/wiki/Leonardo_da_Vinci"
							buttonLabel="Ir a Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Synthetic_Production_of_Penicillin_TR1468.jpg/220px-Synthetic_Production_of_Penicillin_TR1468.jpg"
							cardTitle="Alexander Fleming"
							cardDescription="Alexander Fleming vivió en el Siglo XIX-XX. Descubrió los efectos de la penicilina, y sería durante la Segunda Guerra Mundial cuando se iniciaría su producción y uso, siendo un antes y un después en la medicina moderna e iniciando la <<Era de los antibióticos>> que siguen salvando millones de vidas." 
							buttonUrl="https://es.wikipedia.org/wiki/Alexander_Fleming"
							buttonLabel="Ir a Wikipedia"
						/>
					</div>
				</div>
		


			</div>


	






			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with ❤️ using React.js - {year}
					</p>
				</div>
			</footer>




			
		</div>



		
	);
};




export default Home;


