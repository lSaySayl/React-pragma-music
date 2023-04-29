import logo from "../assets/pragma-logo.svg";
import lineO from "../assets/line-0.svg";
import Button from "../components/button/Button";
import { RiSpotifyFill, RiGoogleFill,RiCloseLine } from "react-icons/ri";
import Form from "../components/login/Form";
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <section className="container">
        <section className="container__superior">
          <img src={logo}></img>
          <section>
          <Link to="/listadom"><Button
              text="Inicia sesión con Spotify"
              btnClass="registro"
              icon={<RiSpotifyFill className="icon" />}
            /></Link>
            
          </section>
          <section>
            <Link to="/listadom">
            <Button
              text="Inicia sesión con Google"
              btnClass="registro"
              icon={<RiGoogleFill className="icon" />}
            />
            </Link>
          </section>
        </section>
  
        <img src={lineO} className="lineO" />
  
        <section className="container__inferior">
          <Form
          placeholder="Ingresa tu correo" />
          <Button type="button" text="Inicia" btnClass="primary" />
        </section>
        <Link
        to="/"><RiCloseLine className="return"/></Link>
        
      </section>
    );
}

export default Inicio;
