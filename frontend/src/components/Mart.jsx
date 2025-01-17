import { useState, useEffect } from "react";
import Cart from "./Cart";

function Mart() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((currItems) => ([...currItems, item]));
    };

    useEffect(() => {
        const fetchMart = async () => {
            try {
                const path = "http://localhost:3000/api/products";
                const response = await fetch(path);
                const result = await response.json();
                setItems(result.products);
            } catch (error) {
                console.error("Error encountered:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMart();
    }, []);

    return (
        (loading) ? (
            <div>Loading...</div>
        ) : (
            <>
                <div className="cart-count">
                    Cart: {cart.length} items
                </div>

                <ul>
                    {items.map((item) => {
                        return (
                            <>
                                <li key={item.product_id}>{item.product_name}, {item.product_price}</li>
                                <button onClick={() => addToCart(item)}>Add to Card</button>
                            </>
                        );
                    })}
                </ul>
            </>
        )
    );
}

export default Mart;