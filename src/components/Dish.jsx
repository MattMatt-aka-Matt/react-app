
import Card from 'react-bootstrap/Card';
import "../assets/styles/Dish.css"
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const Dish = ({ name, image, price,isNew }) => {
  return (
    <Link to={`/plat/${name}`}>
    <Card className="dishCard" style={{ width: '18rem' }}>
      
      <Card.Img className="imgSize"variant="top" src={image} />
      {isNew && <Badge pill className="newBadge" >Nouveau</Badge >}
      
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
