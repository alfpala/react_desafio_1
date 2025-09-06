import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar pizzas:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>🍕 Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-3" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Precio: ${pizza.price}</p>
                <ul>
                  {pizza.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
