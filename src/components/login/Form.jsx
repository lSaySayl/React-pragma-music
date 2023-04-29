import "./Form.css";
import { RiEyeOffFill, RiEyeLine } from "react-icons/ri";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ placeholder }) => {
    const [showPassword, setshowPassword] = useState(false);
  return (
    <form className="container__form">
      <section className="container__input">
        <label>Correo</label>
        <input type="text" placeholder={placeholder} className="campo__entrada" />
      </section>
      <section className="container__input">
        <label>Contraseña</label>
        <input type={showPassword ? "text" : "password"} placeholder="Ingresa tu contraseña" className="campo__entrada"/>
        {showPassword ? <RiEyeLine className="icon" onClick={()=> setshowPassword (!showPassword)}/> :     <RiEyeOffFill className="icon" onClick={()=> setshowPassword (!showPassword)} /> }

      </section>
    </form>
  );
};

export default Form;
