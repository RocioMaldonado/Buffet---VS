import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  const categorias = [
    { id: 1, nombre: "Bebidas", icono: "🥤" },
    { id: 2, nombre: "Golosinas", icono: "🍬" },
    { id: 3, nombre: "Sándwiches", icono: "🥪" },
    { id: 4, nombre: "Snacks", icono: "🍟" },
    { id: 5, nombre: "Café", icono: "☕" },
  ];

  const promociones = [
    { id: 1, nombre: "Café + 2 medialunas", precio: 2000, imagen: "/assets/cafe-medialunas.png" },
    { id: 2, nombre: "Café + muffin", precio: 2000, imagen: "/assets/cafe-muffin.png" },
    { id: 3, nombre: "Sándwich + Coca-Cola", precio: 2500, imagen: "/assets/sandwich-coca.png" },
    { id: 4, nombre: "Sándwich + soda", precio: 2300, imagen: "/assets/sandwich-soda.png" },
    { id: 5, nombre: "Hamburguesa + papas", precio: 3500, imagen: "/assets/hamburguesa-papas.png" },
    { id: 6, nombre: "Ensalada fresca", precio: 2100, imagen: "/assets/ensalada.png" },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">

        {/* 🔹 Hero */}
        <section className="hero">
          <h1>Buffet UNaB</h1>
          <p>Disfrutá de la mejor comida con variedad y calidad</p>
          <button className="btn-primary">Ver Menú Completo</button>
        </section>

        {/* 🔹 Banners con scroll */}
        <section className="home-banners">
          <div className="banner-card">
            <img src="https://via.placeholder.com/200x120" />
            <div className="banner-text">
              <h3>Promo del día</h3>
              <p>Pedí desde tu aula</p>
              <button className="btn-secondary">Ver productos</button>
            </div>
          </div>

          <div className="banner-card">
            <img src="https://via.placeholder.com/200x120" />
            <div className="banner-text">
              <h3>Un Desayuno Perfecto</h3>
              <p>Para tu mañana</p>
              <button className="btn-secondary">Ver más</button>
            </div>
          </div>

          <div className="banner-card">
            <img src="https://via.placeholder.com/200x120" />
            <div className="banner-text">
              <h3>Promo Snacks</h3>
              <p>¡No te lo pierdas!</p>
              <button className="btn-secondary">Ver más</button>
            </div>
          </div>
        </section>

        {/* 🔹 Categorías con scroll */}
        <section>
          <h2 className="section-title">Categorías</h2>
          <div className="categorias-container">
            {categorias.map((cat) => (
              <div key={cat.id} className="categoria-card">
                <span className="categoria-icon">{cat.icono}</span>
                <p>{cat.nombre}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Promociones en grid */}
        <section>
          <h2 className="section-title">Promociones Especiales</h2>
          <div className="promociones-grid">
            {promociones.map((promo) => (
              <div key={promo.id} className="promo-card">
                <img src={promo.imagen} alt={promo.nombre} />
                <h3>{promo.nombre}</h3>
                <p className="promo-precio">${promo.precio.toLocaleString()}</p>
                <button className="btn-add">+ Añadir</button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;

