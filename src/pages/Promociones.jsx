/*import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Promociones.css";

function Promociones() {
  const navigate = useNavigate();

  const promocionesData = [
    {
      id: 1,
      titulo: "Promo 2x1 Pizzas",
      descripcion: "Llevá 2 pizzas familiares al precio de 1.",
      img: "/assets/pizza.png",
      precio: 12000,
    },
    {
      id: 2,
      titulo: "Combo Hamburguesa + Papas + Gaseosa",
      descripcion: "Hamburguesa doble con papas medianas y gaseosa.",
      img: "/assets/hamburguesa.png",
      precio: 9500,
    },
    {
      id: 3,
      titulo: "Promo 3 Gaseosas",
      descripcion: "Llevá 3 gaseosas de 500ml por un precio especial.",
      img: "/assets/coca.png",
      precio: 4500,
    },
    {
      id: 4,
      titulo: "Descuento en Papas XL",
      descripcion: "30% OFF en papas fritas tamaño XL.",
      img: "/assets/papas.png",
      precio: 3000,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="promos-container">
        {/* Header */}
        <div className="promos-header">
          <button className="promos-back" onClick={() => navigate(-1)}>←</button>
          <h2 className="promos-title">Promociones</h2>
        </div>

        {/* Lista de promos */}
        <div className="promos-card">
          {promocionesData.map((promo) => (
            <div key={promo.id} className="promo-item">
              <img src={promo.img} alt={promo.titulo} />
              <div className="promo-info">
                <span className="promo-nombre">{promo.titulo}</span>
                <span className="promo-desc">{promo.descripcion}</span>
                <span className="promo-precio">${promo.precio.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Promociones;*/





