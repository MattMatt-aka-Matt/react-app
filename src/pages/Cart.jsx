import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { CartContext } from "../utils/context/CartContext";
import { useContext } from "react";
import { useTotalAmount } from "../utils/hooks/useTotalAmount";
import useTotalQuantity from "../utils/hooks/useTotalQuantity"; 

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = useTotalAmount();
    const totalQuantity = useTotalQuantity();
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
                <div class="total">
                    <p>Total : {totalQuantity} articles</p>
                    <p>Prix : {totalAmount} euros</p>
                </div>
            </Row>
        </Container>
    );
};
export default Cart;
