import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import Card from './components/Card'
function App() {

  const cursos = [
    { id:1 , name: 'JavaScript', description: 'Programación Imperativa'},
    { id:2 , name: 'HTML', description: 'Etiquetas semánticas'},
    { id:3 , name: 'PHP', description: 'Conexión con Base de datos'},
    { id:4 , name: 'CSS', description: 'Flexbox'},
  ]

  return (
    <>
      <Header nombre="Cursos" /> 
      <main>
        <Container>
          {
            cursos.map( curso => (
              <Card key={curso.id} name={curso.name} description={curso.description} />
            ))
          }
        </Container>
      </main>
      <Footer description="Aplicaciones Híbridas" />
    </>
  )
}

export default App
