import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//aqui importo el archivo css exclusivo de 
import "../components/App.css"


//create your first component
const App = () => {

	const colorRojo = document.querySelector(".rojo");
	const colorAmarillo = document.querySelector(".amarillo");
	const colorVerde = document.querySelector(".verde");


	const cambiaRojo = () => {
		colorRojo.style.boxShadow = "0 0 20px 7px yellow"
		colorAmarillo.style.boxShadow = "none";
		colorVerde.style.boxShadow = "none";

	}


	const cambiaAmarillo = () => {
		colorRojo.style.boxShadow = "none";
		colorAmarillo.style.boxShadow = "0 0 20px 7px yellow"
		colorVerde.style.boxShadow = "none";

	}


	const cambiaVerde = () => {
		colorRojo.style.boxShadow = "none";
		colorAmarillo.style.boxShadow = "none";
		colorVerde.style.boxShadow = "0 0 20px 7px yellow"

	}

	return (
		<div className="text-center ">

			<div className="Semaforo">
				<div className="rojo" onClick={cambiaRojo} >

				</div>
				<div className="amarillo" onClick={cambiaAmarillo} >

				</div>
				<div className="verde" onClick={cambiaVerde}  >

				</div>
			</div>

			<div className="BarraSemaforo">

			</div>
		</div>
	);
};

export default App;