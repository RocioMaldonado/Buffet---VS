import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Logo from "../assets/Logo-buffet.png";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="lg-auth-outer">
      <div className="lg-auth-card lg-login-layout">
        {/* PANEL IZQUIERDO: FORM */}
        <div className="lg-panel lg-panel-left">
          <div className="lg-form-wrapper">
            <div className="lg-logo-box">
              <img src={Logo} alt="Logo buffet UNaB" className="lg-buffet-logo" />
            </div>

            <h2 className="lg-form-title">Iniciar Sesión</h2>

            <form onSubmit={handleSubmit} className="lg-auth-form">
              <div className="lg-field">
                <label htmlFor="email">Correo electrónico</label>
                <div className="lg-input-icon">
                  <AiOutlineUser className="lg-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="lg-field">
                <label htmlFor="password">Contraseña</label>
                <div className="lg-input-icon">
                  <AiOutlineLock className="lg-icon" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="lg-primary-btn">
                Iniciar Sesión
              </button>
            </form>

            <div className="lg-extras">
              <button className="lg-link-btn" type="button">
                ¿Olvidaste tu contraseña?
              </button>
              <button className="lg-link-btn lg-accent" type="button" onClick={goToRegister}>
                Crear cuenta
              </button>
            </div>
          </div>
        </div>

        {/* PANEL DERECHO: WELCOME */}
        <div className="lg-panel lg-panel-right">
          <div className="lg-welcome-box">
            <h3 className="lg-welcome-title">¡BIENVENIDO/A DE NUEVO!</h3>
            <p className="lg-welcome-text">
              Accede a tu cuenta para pedir, ver el menú y gestionar tus órdenes.
              <br />
              Disfruta de descuentos especiales para estudiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
