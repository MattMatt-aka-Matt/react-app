import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Dish from "../components/Dish";
import React, { useState, useEffect } from "react";
import "../assets/styles/Home.css";
import dishesData from "../datas/dishes.json";

function Home() {
  const [dishes, setDishes] = useState([]);
  const [showNewOnly, setShowNewOnly] = useState(false);

  // Fonction pour basculer entre afficher les nouveautés ou tous les plats
  const handleShowNewOnly = () => {
    setShowNewOnly(!showNewOnly);
  };

  useEffect(() => {
    const filteredDishes = showNewOnly
      ? dishesData.filter((dish) => dish.isNew)
      : dishesData;
    setDishes(filteredDishes);
  }, [showNewOnly]);
  // Filtrer les plats en fonction de l'état showNewOnly

  return (
    <>
      <Container>
        <button onClick={handleShowNewOnly} className="filterButton">
          {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
        </button>
        <Row>
          {dishes.map((dish) => (
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
