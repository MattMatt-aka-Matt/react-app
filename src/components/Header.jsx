
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
function Header() {
    return (
      <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#"><img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="un mexicain avec une guitard lol"/></Navbar.Brand>
          <Nav>
            <Nav.Link href="#accueil">Acuueil</Nav.Link>
          </Nav>
      </Navbar>
    </Container>
    );
  }

  export default Header;





// export default ContainerOutsideExample;

// <header >
// <img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="un mexicain avec une guitard lol"></img>
// <nav>
//     <ul>
//         <li><a href="/">accueil</a></li>
//     </ul>
// </nav>
// </header>