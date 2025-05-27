import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/images/banner1.jpeg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import noticia1 from '../assets/images/19-1_MC_UG_BLOG_NuevosNegocios1-2.jpg';
import noticia2 from '../assets/images/gestion-de-negocios.jpg';
import noticia3 from '../assets/images/processos-empresariais.jpg';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${searchTerm}`);
  };

  return (
    <div className="container mt-4">
      {/* Login Button in the top right */}
      <div className="top-login">
        <Link to="/login" className="btn btn-primary">MI OT's</Link>
      </div>

      {/* Buscador */}
      <form className="mb-4" onSubmit={handleSearch}>
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Buscar..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
      </form>

      {/* Carrusel */}
      <div className="d-flex justify-content-center"> 
        <div id="homeCarousel" className="carousel slide mb-5 w-75 custom-carousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner1} className="d-block w-100" alt="Banner1" />
            </div>
            <div className="carousel-item">
              <img src={banner2} className="d-block w-100" alt="Banner2" />
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="Banner3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* Noticias */}
      <section>
        <h2>Noticias</h2>
        <div className="news-grid">
          <div className="news-item">
            <img src={noticia1} alt="Noticia 1" />
            <p>Nuevos modelos de negocio en el entorno digital.</p>
          </div>
          <div className="news-item">
            <img src={noticia2} alt="Noticia 2" />
            <p>Gestión estratégica de empresas en crecimiento.</p>
          </div>
          <div className="news-item">
            <img src={noticia3} alt="Noticia 3" />
            <p>Procesos empresariales para mejorar la eficiencia.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
