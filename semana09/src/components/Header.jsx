import Title from "./Title";
function Header({nombre}) {
  
    return (
      <>
        <header>
            <Title nombre={ nombre} />
        </header>
      </>
    )
  }
  
  export default Header