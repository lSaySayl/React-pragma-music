import { useState, useEffect } from "react";
import { consultarCanciones, pedirTokens } from "../services/spotifyService";
import { RiLogoutBoxRLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/pragma-logo.svg";
import line from "../assets/line.svg";
import logomusic from "../assets/logomusic.svg";
import favorite from "../assets/favorite.svg";
import music from "../assets/music.svg";
import "./ListadoM.css";
import ButtonFavorite from "../components/buttonFavorite/ButtonFavorite";

const ListadoM = () => {
  const [canciones, setCanciones] = useState([]);
  const [mensajeFavoritos, setMensajeFavoritos] = useState(null);

  async function obtenerCanciones() {
    const token = await pedirTokens();
    const res = await consultarCanciones(token);
    const cancionesConEstado = res.tracks.map((cancion) => ({
      ...cancion,
      heart: false, // Agregar un estado de corazón para cada canción
    }));
    setCanciones(cancionesConEstado);
  }

  useEffect(() => {
    obtenerCanciones();
  }, []);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensajeFavoritos("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [mensajeFavoritos]);

  const toggleHeart = (index) => {
    // Crear una nueva lista de canciones con el estado de corazón actualizado
    const nuevasCanciones = [...canciones];
    nuevasCanciones[index].heart = !nuevasCanciones[index].heart;
    setCanciones(nuevasCanciones);

    // Mostrar el mensaje de favoritos apropiado
    if (nuevasCanciones[index].heart) {
      setMensajeFavoritos(<ButtonFavorite text="Se guardo en tus favoritos" />);
    } else {
      setMensajeFavoritos(<ButtonFavorite text="Se quito de tus favoritos" />);
    }
  };

  return (
    <section className="container__list">
      <section className="container__header">
        <section className="container__imgs">
          <img src={logo} alt="Pragma logo"></img>
          <img src={line} alt="Decorative line"></img>
          <img src={logomusic} alt="Music logo"></img>
        </section>

        <section className="container__icon">
          <Link to={"/"}>
            <RiLogoutBoxRLine className="icon__out" />
          </Link>
        </section>
      </section>

      <section className="container__tittle">
        <h1>Música</h1>
      </section>

      <section className="container__songs">
        {canciones.map((cancion, index) => (
          <section key={cancion.id} className="container__song">
            <section className="container__card">
              <img
                src={cancion.album.images[0].url}
                alt="Album cover"
                className="album"
              />
              <section className="container__text">
                <p>{cancion.album.name}</p>
                <span>{cancion.name}</span>
              </section>

              {/* Pasar el estado de corazón correspondiente a cada canción */}
              {cancion.heart ? (
                <>
                  <RiHeartFill
                    className="icon__heartComplete"
                    onClick={() => toggleHeart(index)}
                  />
                </>
              ) : (
                <RiHeartLine
                  className="icon__heart"
                  onClick={() => toggleHeart(index)}
                />
              )}
            </section>
          </section>
        ))}
      </section>
      <section className="mensaje">{mensajeFavoritos}</section>

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

export default ListadoM;
