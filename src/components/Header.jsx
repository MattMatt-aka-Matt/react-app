import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../assets/styles/Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";

import useTotalQuantity from "../utils/hooks/useTotalQuantity";

const Header = () => {
  const TotalQuantity = useTotalQuantity()
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="un mexicain avec une guitard lol"
              className="d-inline-block align-top"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink className="nav-link" to="/">
                Accueil
              </NavLink>
              <NavLink className="nav-link" to="/about">
                a propos
              </NavLink>
              <NavLink className="nav-link" to="/cart">
              Panier ({TotalQuantity || 0})
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

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
