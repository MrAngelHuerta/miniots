import React from 'react';
import './Noticia.css';
import noticia3 from '../assets/images/processos-empresariais.jpg';

const Noticia3 = () => {
  return (
    <div className="noticia-container">
      <div className="noticia-banner">
        <h1>Procesos empresariales para mejorar la eficiencia</h1>
      </div>
      <div className="noticia-content">
        <img src={noticia3} alt="Noticia 3" className="noticia-img" />
        <p>
          Optimizar procesos empresariales significa identificar cuellos de botella y automatizar tareas repetitivas para
          ahorrar tiempo y recursos.
        </p>
        <p>
          Herramientas como ERP, CRM e inteligencia de negocios son fundamentales para lograr procesos eficientes que
          mejoren la experiencia del cliente y aumenten la rentabilidad.
        </p>
      </div>
    </div>
  );
};

export default Noticia3;
