import { useEffect, useState } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar pizza:", err));
  }, []);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <h4>Precio: ${pizza.price}</h4>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <button className="btn btn-success">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
