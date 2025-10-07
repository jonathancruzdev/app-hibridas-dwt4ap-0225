const Container = ( { children }) =>{

    return (
        <>
            <input type="search" />
            <div className="container">
                { children }
            </div>
        </>

    )
}

export default Container