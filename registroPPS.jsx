import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { AiOutlineArrowLeft, AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Logo from "../assets/Logo-buffet.png";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="rg-auth-outer">
      <div className="rg-auth-card rg-register-layout">

        {/* PANEL IZQUIERDO: WELCOME */}
        <div className="rg-panel rg-panel-left rg-welcome-panel">
          <div className="rg-welcome-box">
            <h3 className="rg-welcome-title">¡BIENVENIDO/A!</h3>
            <p className="rg-welcome-text">
              Crea tu cuenta para comenzar a ordenar y aprovechar beneficios para estudiantes.
              <br />
              Es rápido y sencillo.
            </p>
          </div>
        </div>

        {/* PANEL DERECHO: FORM */}
        <div className="rg-panel rg-panel-right rg-form-panel">
          <div className="rg-form-wrapper">
            <button className="rg-back-button" onClick={() => navigate(-1)} aria-label="volver">
              <AiOutlineArrowLeft size={20} />
            </button>

            <div className="rg-logo-box">
              <img src={Logo} alt="Logo buffet UNaB" className="rg-buffet-logo" />
            </div>

            <h2 className="rg-form-title">Registrarse</h2>

            <form onSubmit={handleSubmit} className="rg-auth-form">
              <div className="rg-field">
                <label>Nombre</label>
                <div className="rg-input-icon">
                  <AiOutlineUser className="rg-icon" />
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="rg-field">
                <label>Correo electrónico</label>
                <div className="rg-input-icon">
                  <AiOutlineMail className="rg-icon" />
                  <input
                    type="email"
                    placeholder="ejemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="rg-field">
                <label>Contraseña</label>
                <div className="rg-input-icon">
                  <AiOutlineLock className="rg-icon" />
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="rg-primary-btn">
                Registrarse
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;
