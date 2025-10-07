const Footer = ( { description } ) => {
    const year = new Date().getFullYear();
    return (
        <footer> DV | { description } | { year }</footer>
    )
}
export default Footer