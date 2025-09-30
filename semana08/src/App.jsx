import reactLogo from './assets/react.svg'
import './App.css'
/* 3ª forma de incluir imagenes */
import laptop from "./assets/laptop.png";

function App() {
  const materia = "Aplicaciones Híbridas";
  const cuatrimestres = 4;
  const logueado = false;
  const temas = ['NodeJS', 'ExpressJS','MVC', 'MongoDB'];
  const titulo = <h4> Soy un sub título</h4>;

  const materias = [
    { id:1, nombre: "Lógica de Programación", temas: "Condicionales y variables" },
    { id:2, nombre: "Programación I ", temas: "Funciones, Objetos y DOM" },
    { id:3, nombre: "Aplicaciones para Dispositivos Móviles", temas: "VueJs" },
    { id:4, nombre: "Aplicaciones Híbridas", temas: "NodeJS, Express, MongoDB y React" },
    { id:5, nombre: "Proyecto final", temas: "Tesis" },
  ]
  /* 1ª forma de incluir imagenes */
  const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/960px-React_Native_Logo.png';

  const resultado = temas.map( item => item.toUpperCase());
  const duplicar = (numero ) => {
    return numero * 2;
  }
  return (
    <>
      <h1>Semana 08 | {  materia  }</h1>
      <h2>{ cuatrimestres + 1 }º  { duplicar(2) } </h2>
      {/* 2ª forma de incluir imagenes */}
      <img src="./desktop.png" alt="Desktop" className="icon" />
      {/* 3ª forma de incluir imagenes */}
      <img src={laptop} alt="Laptop" className='icon'/>
      <hr />
      <h2>Materias correlativas</h2>

      <div className="container">
        {
          materias.map( materia => <div className="card" key={materia.id}>
                                      <h4>{ materia.nombre}</h4> 
                                      <p>{materia.temas}</p>
                                    </div>)
        }
      </div>

      <ul>
        { /* temas.map( item => (  <li>  {item} </li> ) ) */}
      </ul>


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
