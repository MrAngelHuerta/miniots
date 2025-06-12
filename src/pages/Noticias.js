import React from 'react';
import { Link } from 'react-router-dom';
import './Noticia.css';
import noticia1 from '../assets/images/19-1_MC_UG_BLOG_NuevosNegocios1-2.jpg';
import noticia2 from '../assets/images/gestion-de-negocios.jpg';
import noticia3 from '../assets/images/processos-empresariais.jpg';

const Noticias = () => {
  return (
    <div className="noticia-container">
      <div className="noticia-banner">
        <h1>Noticias</h1>
      </div>
      <div className="news-grid">
        <Link to="/noticia1" className="news-item">
          <img src={noticia1} alt="Noticia 1" />
          <p>Nuevos modelos de negocio en el entorno digital.</p>
        </Link>
        <Link to="/noticia2" className="news-item">
          <img src={noticia2} alt="Noticia 2" />
          <p>Gestión estratégica de empresas en crecimiento.</p>
        </Link>
        <Link to="/noticia3" className="news-item">
          <img src={noticia3} alt="Noticia 3" />
          <p>Procesos empresariales para mejorar la eficiencia.</p>
        </Link>
      </div>
    </div>
  );
};

export default Noticias;
