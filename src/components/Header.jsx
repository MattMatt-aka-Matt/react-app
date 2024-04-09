import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/Header.css";
import logo from '../assets/images/logo.webp';

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={logo}
              alt="un mexicain avec une guitard lol"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Accueil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
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
