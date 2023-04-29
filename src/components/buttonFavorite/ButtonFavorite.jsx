import { RiCheckboxCircleLine } from "react-icons/ri";
import "./ButtonFavorite.css";

// eslint-disable-next-line react/prop-types
const ButtonFavorite = ({ text }) => {
  return (
    <section className="btn__favorite animate__animated animate__zoomIn">
      <RiCheckboxCircleLine className="icon" />

      {text}
    </section>
  );
};

export default ButtonFavorite;
