import { useState } from "react";

function Cart({ items }) {
    return (
        <>
            <h2>My Cart</h2>
            <ul className="cart">
                {items.map((item, idx) => {
                    return <li key={idx}>{item.product_name}</li>
                })}
            </ul>
        </>
    );
}

export default Cart;