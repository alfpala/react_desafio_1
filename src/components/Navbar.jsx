import "../assets/css/Navbar.css";


function Navbar({ setCurrentPage, user, handleLogout }) {
  return (
    <nav className="navbar">
      <h1>🍕 Pizzería Mamma Mía</h1>
      <div className="nav-buttons">
        {!user ? (
          <>
            <button onClick={() => setCurrentPage("login")}>Login</button>
            <button onClick={() => setCurrentPage("register")}>Registro</button>
          </>
        ) : (
          <button onClick={handleLogout}>Cerrar sesión</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
