import React,{useState,useEffect} from "react";
//Components
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima  from "./components/Clima";



function App() {


  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
 const [consulta, setConsulta] = useState(false)
 const [clima, setClima] = useState({})

  const {ciudad,pais}=busqueda

  useEffect(() => {
    const consultarAPI=async ()=>{
      if(consulta){

        const key='4fa66f3688e1a56402510904cb0d3ee2';
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`
        const respuesta =await fetch(url)
        const resultado=await respuesta.json()
        setClima(resultado)
        
        

      }

    
    }
    consultarAPI()
    
    
  }, [consulta])

  return (
    <div className="App">
      <Header titulo={"El clima"} />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsulta={setConsulta}
              
              />
            </div>
            <div className="col m6 s12">
              <Clima
              clima={clima}
              
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
