import React, { useState } from 'react';
import './Footer.css';
import { 
  RiFacebookFill, 
  RiInstagramFill, 
  RiYoutubeFill, 
  RiLinkedinFill, 
  RiTwitterFill, 
  RiTiktokFill, 
  RiMailFill, 
  RiPhoneFill, 
  RiMapPinFill 
} from "react-icons/ri";
import logo from '../assets/images/icon.jpg'; // Asegúrate de tener tu logo en esta ruta
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleNavigation = (url) => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = url; // Redirige al enlace externo
      setLoading(false);
    }, 800); // Ajusta el tiempo de carga según sea necesario
  };

  return (
    <footer className="footer">
      {/* Efecto de carga */}
      {loading && (
        <div className="loading-overlay">
          <img src={logo} alt="Cargando..." className="loading-logo" />
        </div>
      )}

      {/* Redes sociales */}
      <div className="footer-socials">
        <a onClick={() => handleNavigation("https://www.facebook.com/share/1Em2EsAHAR/")} className="social-icon" style={{ cursor: 'pointer' }}>
          <RiFacebookFill size={30} />
        </a>
        <a onClick={() => handleNavigation("https://www.instagram.com")} className="social-icon" style={{ cursor: 'pointer' }}>
          <RiInstagramFill size={30} />
        </a>
        {/* <a onClick={() => handleNavigation("https://www.youtube.com")} className="social-icon" style={{ cursor: 'pointer' }}>
          <RiYoutubeFill size={30} />
        </a> */}
        <a onClick={() => handleNavigation("https://www.linkedin.com")} className="social-icon" style={{ cursor: 'pointer' }}>
          <RiLinkedinFill size={30} />
        </a>
        {/* <a onClick={() => handleNavigation("https://www.twitter.com")} className="social-icon" style={{ cursor: 'pointer' }}>
          <RiTwitterFill size={30} />
        </a> */}
        {/* <a onClick={() => handleNavigation("https://www.tiktok.com")} className="social-icon" style={{ cursor: 'pointer' }}>
          <RiTiktokFill size={30} />
        </a> */}
      </div>

      {/* Información de contacto */}
      <div className="footer-info">
        <div className="info-item">
          <RiMapPinFill size={20} className="info-icon" />
          <p><strong>Dirección:</strong> Atuntaqui, Imbabura, Ecuador.</p>
        </div>
        <div className="info-item">
          <RiPhoneFill size={20} className="info-icon" />
          <p><strong>Celular:</strong> +593 95 885 0819</p>
        </div>
        <div className="info-item">
          <RiMailFill size={20} className="info-icon" />
          <p><strong>Correo:</strong> anthonychiza09@gmail.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>Copyright © 2025 Marck Chiza. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;