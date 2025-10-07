const Card = ({id, name, description, add}) => {
 
    const mostrarCurso = () =>{
        alert(`Curso de ${name}`);
    }

    const addCard = () => {
        add({id,name });
    }

    return (
        <div className="card">
            <h4>{ name }</h4>
            <p>{ description }</p>
            <button onClick={ mostrarCurso } type="button">Ver</button>
            <button onClick={ addCard } type="button">🛒</button>

        </div>
    )
}
export default Card;