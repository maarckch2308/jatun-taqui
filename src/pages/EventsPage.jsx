import React from 'react';
import './EventPage.css';
import image1 from '../assets/images/Logooo_1.jpg'; // Importa la primera imagen
import image2 from '../assets/images/Logooo_1.jpg'; // Importa la segunda imagen
import bannerImage from '../assets/images/Logooo_1.jpg'; // Importa la imagen del banner
import bannerVideo from '../assets/images/coming.mp4'; // Importa el video del banner
import image3 from '../assets/images/icon.jpg';

const EventPage = () => {
  const events = [
    {
      id: 1,
      title: 'Evento',
      description: 'Proximamente.',
      date: 'Proximamente',
      image: image3, // Usa la imagen importada
    },
    {
      id: 2,
      title: 'Evento',
      description: 'Proximamente.',
      date: 'Proximamente',
      image: image3, // Usa la imagen importada
    },
  ];

  return (
    <div className="event-page">
      {/* Imagen de fondo que cubre toda la pantalla */}
      <div className="banner-container">
    <video
      className="banner-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={bannerVideo} type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
    <div className="banner-text">
      <h1>Bienvenidos a Nuestros Eventos</h1>
      <p>Descubre lo mejor de nuestra comunidad</p>
    </div>
  </div>

      <header className="event-header">
        <h1>Próximos Eventos</h1>
        <p>Descubre los eventos más recientes y participa con nosotros.</p>
      </header>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <p className="event-date">{event.date}</p>
              <a href="#" className="event-button">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;