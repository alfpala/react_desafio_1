import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
// import Cart from "./components/Cart";

function App() {
    return (
        <div>
            <Navbar />
            {/* Cambia entre Home y Pizza para validar cada requerimiento */}
            <Home />
            {/* <Pizza /> */}
            {/* <Cart /> */}
            <Footer />
        </div>
    );
}

export default App;
