import { RiLogoutBoxRLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import favorite from "../assets/favorite.svg";
import music from "../assets/music.svg";
import album from "../assets/album.jpg"
import albumDos from "../assets/albumdos.jpg"

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
                src={album}
                alt="Album cover"
                className="album"
              />
              <section className="container__text">
                <p>Slipknot</p>
                <span>Wait and Bleed</span>
              </section>
              <RiHeartLine className="icon__heart"/>
            </section>
            

      </section>
      <section className="container__song">
            <section className="container__card">
              <img
                src={albumDos}
                alt="Album cover"
                className="album"
              />
              <section className="container__text">
                <p>Vol. 3: The Subliminal Verses</p>
                <span>Before I Forget</span>
              </section>
              <RiHeartLine className="icon__heart"/>
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
