import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Dish from "../components/Dish";

function Home() {
  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: "3",
      new: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: "12",
      new: false,
    },
    {
      id: 3,
      name: "Mole poblano",
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: "15",
      new: false,
    },
  ];
  
  return (
    <>
      <Container>
        <Row>
          {dishes.map((dish) => (
            // Utilisation de l'identifiant unique de chaque plat comme clé
            <Col key={dish.id}>
              <Dish name={dish.name} image={dish.image} price={dish.price} isNew={dish.new}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
