import "../assets/css/Home.css";
import Header from './Header';
import { pizzas } from "../data/pizzas";
import CardPizza from './CardPizza';

const Home = ({ user }) => {
  return (
    <main>
      <Header />
      <div className="home-container">
        <h2>Bienvenido a Mamma Mía 🍕</h2>
        <p>Has iniciado sesión como: <strong>{user.email}</strong></p>
      </div>

       <Cart />
      
      <div className="container my-4">
      <h2>Nuestras Pizzas</h2>
      <div className="d-flex flex-wrap">
        {pizzas.map(p => (
          <CardPizza key={p.id} {...p} />
        ))}
      </div>
    </div> 

    </main>
  )
}

export default Home
