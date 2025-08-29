import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(cart.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decrease = (id) => {
    setCart(cart.map(p => 
      p.id === id ? { ...p, quantity: p.quantity - 1 } : p
    ).filter(p => p.quantity > 0));
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="container my-4">
      <h2>Carrito de Compras</h2>
      {cart.map(p => (
        <div key={p.id} className="d-flex align-items-center mb-2 border p-2">
          <img src={p.img} alt={p.name} width={80} />
          <div className="mx-3">
            <h5>{p.name}</h5>
            <p>${p.price} x {p.quantity}</p>
          </div>
          <div className="ms-auto">
            <button className="btn btn-sm btn-danger me-2" onClick={() => decrease(p.id)}>-</button>
            <button className="btn btn-sm btn-success" onClick={() => increase(p.id)}>+</button>
          </div>
        </div>
      ))}
      <h4>Total: ${total}</h4>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
}
