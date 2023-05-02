import "./Login.css";
import logo from "../assets/pragma-logo.svg";
import line from "../assets/line.svg";
import pragmaM from "../assets/pragma-music.svg";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="container">
      <section className="container__logo animate__animated animate__fadeInDown">
        <img src={logo}></img>
        <img src={line}></img>
        <img src={pragmaM}></img>
      </section>
      <section className="container__buttons animate__animated animate__fadeInUp">
        <Link to={"registro"}>
          <Button text="Regístrate" btnClass="primary" />
        </Link>
        <Link to={"inicio"}>
          <Button text="Inicia sesión" btnClass="secondary" />
        </Link>
      </section>
    </section>
  );
};

export default Login;
