const Container = ( { children }) =>{

    const categorias = [
        { id:1, description: 'FrontEnd'},
        { id:2, description: 'BackEnd'},
        { id:3, description: 'Diseño Gráfico'},
        { id:4, description: 'Infra Estructura'},
    ]

    const buscar = () => {
        console.log('Buscar ...');
    }

    return (
        <>
            <input type="search" onChange={  buscar }/>
            <select name="" onChange={ buscar}>
                {  categorias.map( categoria =>  <option 
                                                    key={categoria.id} 
                                                    value={categoria.id}>
                                                        { categoria.description }
                                                </option> )}
            </select>
            <div className="container">
                { children }
            </div>
        </>

    )
}

export default Container