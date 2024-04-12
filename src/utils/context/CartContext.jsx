import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart];

        const indexProduct = newCart.findIndex((currentProduct) => currentProduct.id === product.id);

        if (indexProduct === -1) {
            product.quantity = 1;
            newCart.push(product);
        } else {
            newCart[indexProduct].quantity++;
        }

        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};