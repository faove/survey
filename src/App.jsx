import preguntas from "./preguntas";
import { useState, useEffect } from "react";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(isanswer,e) {
    // if (answer === preguntas[preguntaActual].correcta) {
    //   setPuntuacion(puntuacion + 1);
    // }

    //console.log(preguntas.answer);
    e.target.classList.add("correct");
    
    
    setTimeout(() => {
      if (preguntaActual < preguntas.length - 1) {
        console.log('entra');
        console.log(preguntas.answer);
        setPreguntaActual(preguntaActual + 1);
      } else {
        setIsFinished(true);
      }
    } , 1000);
  }

  if (isFinished) {
    return (
      <main className="app">
        <h1>Gracias</h1>
        <p>por llenar nuestra encuesta {puntuacion}</p>
      </main>
    );
  }  
  return (
    <main className="app">
      <div className="lado-izquierdo">
        <div className="pregunta-numero">
          <span>Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        <div className="pregunta-titulo">
          <span>{preguntas[preguntaActual].titulo}</span>
        </div>
      </div>
      <div className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button 
          key={respuesta.textoRespuesta} 
          onClick={(e) => handleAnswerSubmit(respuesta.isAnswer, e)}
          >
                    {respuesta.textoRespuesta}</button>
          ))}

          
      </div>

    </main>
  )
}

export default App
