import { pizzas } from "../data/pizzas";
import CardPizza from "./CardPizza";

export default function Home() {
  return (
    <div className="container my-4">
      <h2>Nuestras Pizzas</h2>
      <div className="d-flex flex-wrap">
        {pizzas.map(p => (
          <CardPizza key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
