import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import { Link, useNavigate, useHistory } from 'react-router-dom';
import image1 from '../assets/images/Logooo.png';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image6.jpeg';
import image4 from '../assets/images/image5.png';
import logo from '../assets/images/icon.jpg'; // Importa el logo
import Footer from '../components/Footer';

const HomePage = () => {
  const [loading, setLoading] = useState(false); // Estado de carga
  const history = useHistory(); // Cambia useNavigate por useHistory
  const images = [
    { src: image4, link:'https://www.torneopro.app/jatun-taqui/78'  },
    { src: image1, link:'/events'  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavigation = (link) => {
    setLoading(true); // Activa el estado de carga
    setTimeout(() => {
      if (link.startsWith('/')) {
        history.push(link); // Redirige a rutas internas
      } else {
        window.location.href = link; // Redirige a enlaces externos
      }
      setLoading(false); // Desactiva el estado de carga
    }, 1000); // Ajusta el tiempo de carga según sea necesario
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="homepage"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      {/* Efecto de carga */}
      {loading && (
        <div className="loading-overlay">
          <img src={logo} alt="Cargando..." className="loading-logo" />
        </div>
      )}

      <div className="slider-container">
        <button className="slider-btn left" onClick={prevSlide}>
          &#8592;
        </button>
        <div className="slider-track" style={{
          transform: `translateX(-${currentIndex * 50}%)`,
          width: `${images.length * 100}%`,
        }}>
          {images.map((image, index) => (
            <div
              key={index}
              className="slider-link"
              onClick={() => handleNavigation(image.link)} // Maneja la redirección con animación
            >
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>

      {/* Sección de la historia */}
      <section className="history-section">
        <h2 className="history-title">Nuestra Historia</h2>
        <p className="history-text">
          Nuestra cultura es un reflejo de nuestras raíces, tradiciones y valores. A través de los años, hemos preservado nuestras costumbres, música, danzas y gastronomía, que son el alma de nuestra identidad. Cada rincón de nuestra tierra cuenta una historia, y cada tradición es un legado que compartimos con orgullo.
        </p>
        <img
          src={image3}
          alt="Imagen debajo del slider"
          className="below-slider-image"
        />
      </section>

      {/* Sección de la founders */}
      <section className="founders-section">
          <h2 className="founders-title">Nuestros miembros Fundadores</h2>

          <img
              src={image2}
              alt="Imagen debajo del slider"
              className="below-slider-image"
          />
          <ul className="founders-list">
              <li className="founder-item">Marco Humberto Lima Maigua</li>
              <li className="founder-item">Luis Laurentino Chiza Lema</li>
              <li className="founder-item">Carlos Segundo Manrique Potosi</li>
              <li className="founder-item">María Rebeca Lima Maigua</li>
              <li className="founder-item">Robertina Lema Chiza</li>
              <li className="founder-item">Julio Enrique Liman Moran</li>
              <li className="founder-item">Segundo José Lema Chiza</li>
              <li className="founder-item">Rafael Lema Chiza</li>
              <li className="founder-item">Alex Javier Lima Amaguaña</li>
              <li className="founder-item">José Joaquín Lima Chiza</li>
              <li className="founder-item">Juan Xavier Duque Saransing</li>
              <li className="founder-item">Diego Armando Lema Cordova</li>
          </ul>
      </section>

      <section className="mission-vision-section">
        <div className="mv-container">
          {/* Tarjeta Misión */}
          <div className="mv-card mission-card">
            <div className="mv-icon"></div> {/* Puedes usar un icono o imagen */}
            <h3>MISIÓN</h3>
            <p className="mv-text">
            Preservar y difundir la historia, tradiciones y valores de la comunidad Jatuntaqui, pueblo indígena Kichwa Otavalo, a través de la memoria colectiva y el legado de nuestros ancestros. Queremos compartir con el mundo cómo iniciativas simples, como el fútbol entre vecinos y el equipo Atahualpa, se convirtieron en símbolos de unidad, identidad y alegría. Nuestra página web busca ser un puente entre generaciones, rescatando anécdotas, costumbres y la riqueza cultural que nos define.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div className="mv-card vision-card">
            <div className="mv-icon"></div>
            <h3>VISIÓN</h3>
            <p className="mv-text">
            Ser un referente digital de la cultura Jatuntaqui, donde las nuevas generaciones y el mundo conozcan nuestra historia auténtica, desde los relatos de nuestros mayores hasta las expresiones contemporáneas de nuestra comunidad. Aspiramos a que esta plataforma fortalezca el orgullo identitario, inspire la preservación de nuestras raíces y fomente la conexión entre comunidades indígenas y aliados globales, siempre bajo el espíritu de "jugar, compartir y vivir nuestra cultura", tal como lo hicieron nuestros antepasados.
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default HomePage;