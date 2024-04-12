import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext"
import { useState } from "react";

const useTotalQuantity = () => {
    const { cart } = useContext(CartContext);
    const [totalQty, setTotalQty] = useState(0);

    useEffect(() => {
        let totalQuantity = 0;
        if (cart) {
            cart.forEach(dish => {
                totalQuantity += dish.quantity;
            });
            setTotalQty(totalQuantity);
        }
    }, [cart]);
    return totalQty;

}

export default useTotalQuantity