import React from "react";
import ImagenHamburguesa from "../Imagenes/hamburguesa.svg";
import ImagenClose from "../Imagenes/close.svg";
import ImagenCheckList from "../Imagenes/checklist.svg";
import ImagenPieChart from "../Imagenes/pie_chart.svg";
import ImagenSearchEngine from "../Imagenes/search_engine.svg";
import ImagenSecurity from "../Imagenes/security.svg";
import Imagen1 from "../Imagenes/uno.jpg";
import Imagen2 from "../Imagenes/dos.jpg";
import Imagen3 from "../Imagenes/tres.jpg";
import Imagen4 from "../Imagenes/cuatro.jpg";
import Imagen5 from "../Imagenes/cinco.jpg";
import Imagen6 from "../Imagenes/seis.jpg";
import Animacion from "../componens/Animacion";

const Conoce = ({ setRegistro, setNosotros }) => {
  const Mostrar = () => {
    const hamburguer = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-navegacion");
    menu.classList.toggle("spread");
    window.addEventListener("click", (e) => {
      if (
        menu.classList.contains("spread") &&
        e.target != menu &&
        e.target != hamburguer
      ) {
        menu.classList.toggle("spread");
      }
    });
  };
  const ContenedorLight = (e) => {
    const hamburguer1 = document.querySelector(".hamburger");
    const imagenesLight = document.querySelector(".agregar-imagen");
    const contenedorLight = document.querySelector(".imagen-light");
    const CloseExtra = document.querySelector(".cerrarVentana");
    if (e.target !== imagenesLight) {
      contenedorLight.classList.toggle("show");
      imagenesLight.classList.toggle("showImage");
      hamburguer1.style.opacity = "1";
      CloseExtra.style.opacity = "1";
    }
  };

  const ImagenAmplia = (e) => {
    const hamburguer1 = document.querySelector(".hamburger");
    const imagenesLight = document.querySelector(".agregar-imagen");
    const contenedorLight = document.querySelector(".imagen-light");
    const CloseExtra = document.querySelector(".cerrarVentana");
    imagenesLight.src = e.target.src;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburguer1.style.opacity = "0";
    CloseExtra.style.opacity = "0";
  };
  return (
    <div>
      <header className="header" id="inicio">
        <img
          src={ImagenClose}
          alt=""
          className="cerrarVentana"
          onClick={(e) => {
            setRegistro(false);
            setNosotros(false);
          }}
        />

        <img
          src={ImagenHamburguesa}
          alt=""
          className="hamburger"
          onClick={Mostrar}
        />
        <nav className="menu-navegacion">
          <a href="#inicio">Inicio</a>
          <a href="#servicio">Servicio</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#expertos">Expertos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="contenedor1 head">
          <h1 className="titulo">Convertimos tus sueños en realidad</h1>
          <p className="copy">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <Animacion />
        </div>
      </header>

      <main>
        <section className="services contenedor1" id="servicio">
          <h2 className="subtitulo">Nuestro Servicio</h2>
          <div className="contenedor-servicio">
            <img src={ImagenCheckList} alt="" />
            <div className="checklist-servicio">
              <div className="service">
                <h3 className="n-service">
                  <span className="number">1</span>Diseño web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis ad itaque dolorum obcaecati et aperiam eum ea soluta
                  libero vitae!
                </p>
              </div>
              <div className="service">
                <h3 className="n-service">
                  <span className="number">2</span>Diseño web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis ad itaque dolorum obcaecati et aperiam eum ea soluta
                  libero vitae!
                </p>
              </div>
              <div className="service">
                <h3 className="n-service">
                  <span className="number">3</span>Diseño web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis ad itaque dolorum obcaecati et aperiam eum ea soluta
                  libero vitae!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery" id="portafolio">
          <div className="contenedor1">
            <h2 className="subtitulo">Galeria</h2>
            <div className="contenedor-galeria">
              <img
                src={Imagen1}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen2}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen3}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen4}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen5}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
              <img
                src={Imagen6}
                onClick={ImagenAmplia}
                alt=""
                className="img-galeria"
              />
            </div>
          </div>
        </section>
        <section className="imagen-light" onClick={ContenedorLight}>
          <img src={ImagenClose} alt="" className="close" />
          <img src={Imagen1} alt="" className="agregar-imagen" />
        </section>
        <div className="contenedor1" id="expertos">
          <h2 className="subtitulo">Expertos en:</h2>
          <section className="experts">
            <div className="card">
              <div className="face front">
                <img src={ImagenPieChart} />
                <h3 className="n-expert">Analisis</h3>
              </div>

              <div className="face back">
                <h3>Analisis</h3>
                <p>
                  es un país entre los Estados Unidos y América Central,
                  conocido por las playas en el Pacífico y el golfo de México, y
                  su diverso paisaje de montañas, desiertos y selvas.
                </p>
                <div className="link"></div>
              </div>
            </div>

            <div className="card">
              <div className="face front">
                <img src={ImagenSearchEngine} />
                <h3 className="n-expert">Gestión</h3>
              </div>

              <div className="face back">
                <h3>Gestión</h3>
                <p>
                  es un país entre los Estados Unidos y América Central,
                  conocido por las playas en el Pacífico y el golfo de México, y
                  su diverso paisaje de montañas, desiertos y selvas.
                </p>
                <div className="link"></div>
              </div>
            </div>

            <div className="card">
              <div className="face front">
                <img src={ImagenSecurity} />
                <h3 className="n-expert">Administración</h3>
              </div>

              <div className="face back">
                <h3>Administración</h3>
                <p>
                  es un país entre los Estados Unidos y América Central,
                  conocido por las playas en el Pacífico y el golfo de México, y
                  su diverso paisaje de montañas, desiertos y selvas.
                </p>
                <div className="link"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer id="contacto">
        <div className="contenedor1 footer-content">
          <div className="contact-us">
            <h2 className="brand">Luis Design</h2>
            <p>Somos expertos en la creación de tus sueños</p>
          </div>
          <div className="social-media">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100091853778009"
              className="social-media-icon"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Expense1Manager"
              className="social-media-icon"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com/expen.semanager?igshid=ZDdkNTZiNTM="
              className="social-media-icon"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="line"></div>
      </footer>
    </div>
  );
};

export default Conoce;
