import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const materia = "Aplicaciones Híbridas";
  const cuatrimestres = 4;
  const logueado = false;
  const temas = ['NodeJS', 'ExpressJS','MVC', 'MongoDB'];
  const titulo = <h4> Soy un sub título</h4>;
  const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/960px-React_Native_Logo.png';

  const duplicar = (numero ) => {
    return numero * 2;
  }
  return (
    <>
      <h1>Semana 08 | {  materia  } { cuatrimestres + 1 }º  { duplicar(2) } </h1>
      {
        logueado == true ? ( <img src={logo} alt="logo" /> ) : ( <h4> Acceso restrigido</h4> )
      }
      
        { titulo} 
        <br />
        <hr />
      <p className="violeta"> Soy un texto</p>
    </>
  
  )
}

export default App
