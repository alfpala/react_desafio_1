const Header = () => {
  return (
    <header 
      className="text-black text-center py-5" 
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1200x400")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1>¡<b>Bienvenido a Pizzería Mamma Mía</b>!</h1>
      <p>Las mejores pizzas con ingredientes frescos y mucho amor.</p>
    </header>
  )
}

export default Header
