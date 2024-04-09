import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dish from "./components/Dish";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col xs >
              <Dish
                name="Tacos à l’unité"
                image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                price="3"
              />
            </Col>
            <Col xs >
              <Dish
                name="Enchiladas"
                image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                price="12"
              />
            </Col>
            <Col xs >
              <Dish
                name="Mole poblano"
                image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                price="15"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
