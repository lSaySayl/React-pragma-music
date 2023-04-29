import logo from "../assets/pragma-logo.svg";
import lineO from "../assets/line-0.svg";
import Button from "../components/button/Button";
import "./Registro.css";
import { RiSpotifyFill, RiGoogleFill,RiCloseLine } from "react-icons/ri";
import Form from "../components/login/Form";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <section className="container">
      <section className="container__superior">
        <img src={logo}></img>
        <section>
          <Button
            text="Registrate con Spotify"
            btnClass="registro"
            icon={<RiSpotifyFill className="icon" />}
          />
        </section>
        <section>
          <Button
            text="Registrate con Google"
            btnClass="registro"
            icon={<RiGoogleFill className="icon" />}
          />
        </section>
      </section>

      <img src={lineO} className="lineO" />

      <section className="container__inferior">
        <Form
        placeholder="Ingresa tu correo" />
        <Button type="button" text="Registrate" btnClass="primary" />
      </section>
    <Link to="/">  <RiCloseLine className="return"/></Link>

    </section>
  );
};

export default Registro;
