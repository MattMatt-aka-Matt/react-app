import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Dish from "../components/Dish";
import React, { useState } from "react";
import "../assets/styles/Home.css";

function Home() {
  const dishes = [
    {
      id: 1,
      name: "Tacos à l’unité",
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: "3",
      isNew: true,
    },
    {
      id: 2,
      name: "Enchiladas",
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: "12",
      isNew: false,
    },
    {
      id: 3,
      name: "Mole poblano",
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: "15",
      isNew: false,
    },
  ];

  // État pour gérer l'affichage des nouveautés uniquement
  const [showNewOnly, setShowNewOnly] = useState(false);

  // Fonction pour basculer entre afficher toutes les nouveautés ou tous les plats
  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  // Filtrer les plats en fonction de l'état showNewOnly
  const filteredDishes = showNewOnly
    ? dishes.filter((dish) => dish.isNew)
    : dishes;

  return (
    <>
      <Container>
        <button onClick={handleShowNewOnly} className="filterButton">
          {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
        </button>
        <Row>
          {filteredDishes.map((dish) => (
            // Utilisation de l'identifiant unique de chaque plat comme clé
            <Col key={dish.id}>
              <Dish
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isNew={dish.isNew}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
