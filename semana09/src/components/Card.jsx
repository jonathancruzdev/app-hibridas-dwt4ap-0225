const Card = ({name, description}) => {
    return (
        <div className="card">
            <h4>{ name }</h4>
            <p>{ description }</p>
        </div>
    )
}
export default Card;