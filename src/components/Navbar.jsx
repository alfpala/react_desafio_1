const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">🍕 <b>Pizzería Mamma Mía</b>!</a>
      <div className="ms-auto d-flex gap-2">
        <button className="btn btn-outline-light">Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Perfil</button>
            <button className="btn btn-outline-light">🔒 Salir</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Registro</button>
          </>
        )}
        <button className="btn btn-outline-success">
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
