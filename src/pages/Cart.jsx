import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from 'react-bootstrap/Table';
import { CartContext } from "../utils/context/CartContext";
import { useContext,} from "react";

const Cart = () => {
    const { cart } = useContext(CartContext);
return (
    <Container>
        <Row>
            <h1>Panier</h1>
        </Row>
        <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantités</th>
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}€</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Row>
    </Container>
);
};
export default Cart;