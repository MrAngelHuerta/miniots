import React, { useEffect } from 'react';
import './Noticia.css';
import noticia1 from '../assets/images/19-1_MC_UG_BLOG_NuevosNegocios1-2.jpg';

const Noticia1 = () => {
  useEffect(() => {
    document.title = 'Nuevos modelos de negocio | MiOTS';
  }, []);

  return (
    <div className="noticia-container">
      <div className="noticia-banner">
        <h1>Nuevos modelos de negocio en el entorno digital</h1>
      </div>
      <div className="noticia-content">
        <img src={noticia1} alt="Noticia 1" className="noticia-img" />
        <p>...</p>
      </div>
    </div>
  );
};

export default Noticia1;
