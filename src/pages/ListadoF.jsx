import { RiLogoutBoxRLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import favorite from "../assets/favorite.svg";
import music from "../assets/music.svg";
import "./ListadoF.css"

import "./ListadoM.css";

const ListadoF = () => {
  return (
    <section className="container__list">
      <section className="container__header">
        <section className="container__name">
          <span>CM</span>
          <p>Camilo Londoño</p>
        </section>

        <section className="container__icon">
          <Link to={"/"}>
            <RiLogoutBoxRLine className="icon__out" />
          </Link>
        </section>
      </section>

      <section className="container__tittle">
        <h1>Tus favoritos</h1>
      </section>

      <section className="container__songs">

          <section className="container__song">
            <section className="container__card">
              <img
                src=""
                alt="Album cover"
                className="album"
              />
              <section className="container__text">
                <p>a</p>
                <span>a</span>
              </section>
            </section>

      </section>
      </section>





      <section className="container__footer">
        <Link to={"/listadom"}>
          <img src={music} alt="Music icon"></img>
        </Link>

        <Link to={"/listadof"}>
          <img src={favorite} alt="Favorite icon"></img>
        </Link>
      </section>
    </section>
  );
};

export default ListadoF;
