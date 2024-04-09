
import Card from 'react-bootstrap/Card';
import "../assets/styles/Dish.css"
import { Link } from 'react-router-dom';

const Dish = ({ name, image, price}) => {
  return (
    <Link to={`/plat/${name}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Img className="imgSize"variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{price}€</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
  );
};
export default Dish;
