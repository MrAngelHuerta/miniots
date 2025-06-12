import React from 'react';
import './Noticia.css';
import noticia2 from '../assets/images/gestion-de-negocios.jpg';

const Noticia2 = () => {
  return (
    <div className="noticia-container">
      <div className="noticia-banner">
        <h1>Gestión estratégica de empresas en crecimiento</h1>
      </div>
      <div className="noticia-content">
        <img src={noticia2} alt="Noticia 2" className="noticia-img" />
        <p>
          La gestión estratégica se enfoca en alinear los objetivos de una empresa con el entorno en el que opera. Esto incluye
          el análisis de oportunidades, amenazas y la toma de decisiones orientadas a largo plazo.
        </p>
        <p>
          Empresas en crecimiento requieren estructuras ágiles y liderazgo enfocado en resultados para adaptarse rápidamente a
          cambios del mercado.
        </p>
      </div>
    </div>
  );
};

export default Noticia2;
