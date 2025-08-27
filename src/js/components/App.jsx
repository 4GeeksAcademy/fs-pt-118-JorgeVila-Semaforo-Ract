import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//aqui importo el archivo css exclusivo de 
import "../components/App.css"


//create your first component
const App = () => {

const cambiaVerde =()=>{

}

	return (
		<div className="text-center ">
            <div className="Semaforo">
				<div className="rojo"> 
					
				</div>
				<div className="amarillo"> 
					
				</div>
				<div onClick={cambiaVerde} className="verde">
					
				</div>
			</div>

		</div>
	);
};

export default App;