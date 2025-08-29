import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//import RegisterPage from "./components/RegisterPage";
//import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

import Cart from "./components/Cart";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // login | register | home
  const [user, setUser] = useState(null); // null si no está logueado

  const handleLogin = (email) => {
    setUser({ email });      // guardamos el usuario simulado
    setCurrentPage("home");  // redirigimos al Home
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("login");
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} user={user} handleLogout={handleLogout} />

      {!user ? (
        currentPage === "login" ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          
          <Cart />
         
        )
      ) : (
        <Home user={user} />
      )}

      <Footer />
    </div>
  );
}

export default App;