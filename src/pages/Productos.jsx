import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Productos.css";

function Productos() {
  const navigate = useNavigate();

  const categorias = [
    { id: "all", nombre: "Todo" },
    { id: "bebidas", nombre: "Bebidas" },
    { id: "golosinas", nombre: "Golosinas" },
    { id: "sandwiches", nombre: "Sándwiches" },
    { id: "snacks", nombre: "Snacks" },
    { id: "postres", nombre: "Postres" },
  ];

  const productosData = [
    { id: 1, nombre: "Café + 2 medialunas", precio: 2000, categoria: "bebidas", img: "/assets/cafe-medialunas.png" },
    { id: 2, nombre: "Sándwich de jamón y queso", precio: 2500, categoria: "sandwiches", img: "/assets/sandwich.png" },
    { id: 3, nombre: "Hamburguesa + papas", precio: 3500, categoria: "sandwiches", img: "/assets/hamburguesa-papas.png" },
    { id: 4, nombre: "Flan con dulce", precio: 1500, categoria: "postres", img: "/assets/flan.png" },
    { id: 5, nombre: "Café con leche", precio: 1800, categoria: "bebidas", img: "/assets/cafe.png" },
    { id: 6, nombre: "Brownie", precio: 1200, categoria: "postres", img: "/assets/brownie.png" },
    { id: 7, nombre: "Té con limón", precio: 1700, categoria: "bebidas", img: "/assets/te.png" },
    { id: 8, nombre: "Pizza individual", precio: 3000, categoria: "snacks", img: "/assets/pizza.png" },
    { id: 9, nombre: "Ensalada fresca", precio: 2800, categoria: "snacks", img: "/assets/ensalada.png" },
    { id: 10, nombre: "Helado", precio: 1600, categoria: "postres", img: "/assets/helado.png" },
    { id: 11, nombre: "Chocolate", precio: 900, categoria: "golosinas", img: "/assets/chocolate.png" },
    { id: 12, nombre: "Caramelos surtidos", precio: 600, categoria: "golosinas", img: "/assets/caramelos.png" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [mensaje, setMensaje] = useState("");

  const productosFiltrados =
    categoriaSeleccionada === "all"
      ? productosData
      : productosData.filter((p) => p.categoria === categoriaSeleccionada);

  const handleAddToCart = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const existe = carritoActual.find((p) => p.id === producto.id);

    if (existe) {
      existe.cantidad += 1;
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual));

    setMensaje(` ${producto.nombre} añadido al carrito`);
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <>
      <Navbar />
      <div className="productos-layout">
        {/* Columna izquierda */}
        <aside className="productos-sidebar left">
          <div className="sidebar-card">
            <h3>Promos del día</h3>
            <ul>
              <li>Café + medialuna — $2000</li>
              <li>Hamburguesa + papas — $3500</li>
            </ul>
            <button className="btn-promo">Paga con QR y obtené 10% OFF</button>
          </div>
        </aside>

        {/* Centro */}
        <div className="productos-wrapper">
          <div className="productos-header">
            <button className="productos-back" onClick={() => navigate(-1)}>←</button>
            <h2 className="productos-titulo">Productos</h2>
          </div>

          {mensaje && <div className="mensaje-carrito">{mensaje}</div>}

          <div className="productos-categorias">
            {categorias.map((cat) => (
              <div
                key={cat.id}
                className={`categoria-card ${categoriaSeleccionada === cat.id ? "activa" : ""}`}
                onClick={() => setCategoriaSeleccionada(cat.id)}
              >
                {cat.nombre}
              </div>
            ))}
          </div>

          <section>
            <div className="productos-grid">
              {productosFiltrados.map((prod) => (
                <div key={prod.id} className="producto-card">
                  <img src={prod.img} onClick={() => navigate(`/producto/${prod.id}`)} />
                  <h3>{prod.nombre}</h3>
                  <p className="producto-precio">${prod.precio.toLocaleString()}</p>
                  <button className="btn-add" onClick={() => handleAddToCart(prod)}>+ Añadir</button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Columna derecha */}
        <aside className="productos-sidebar right">
          <div className="sidebar-card">
            <h3>Recomendados</h3>
            <p>Brownie — $1200</p>
            <p>Helado — $1600</p>
          </div>
          <div className="sidebar-card">
            <h3>Novedades</h3>
            <p>Ensalada fresca</p>
            <p>Pizza individual</p>
          </div>
          <div className="sidebar-card">
            <h3>Info útil</h3>
            <p>🕐 Horarios: 8:00 - 23:00</p>
            <p>💳 Métodos de pago: QR, Débito, Crédito</p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Productos;

