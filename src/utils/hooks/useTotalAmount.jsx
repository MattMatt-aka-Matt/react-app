import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useTotalAmount() {
    const { cart } = useContext(CartContext);
    
    const totalAmount = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return totalAmount;
}
