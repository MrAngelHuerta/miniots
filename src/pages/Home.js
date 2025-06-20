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
    <>
      {/* Barra de navegación */}
      <nav className="main-header">
        <div className="logo">
          <span className="brand">Miots</span>
        </div>
        <div className="nav-links">
          <Link to="/ots">OTS</Link>
          <Link to="/Colabora">Colabora con nosotros</Link>
          <Link to="/Contactanos">Contactanos</Link>
          <Link to="/login" className="login-btn">Iniciar Sesión</Link>
          <Link to="/noticias">Noticias</Link>

        </div>
      </nav>

      <div className="container mt-4">
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
              <Link to="/noticia1" target="_blank">
                <img src={noticia1} alt="Noticia 1" />
                <p>Nuevos modelos de negocio en el entorno digital.</p>
              </Link>
            </div>
            <div className="news-item">
              <Link to="/noticia2" target="_blank">
                <img src={noticia2} alt="Noticia 2" />
                <p>Gestión estratégica de empresas en crecimiento.</p>
              </Link>
            </div>
            <div className="news-item">
              <Link to="/noticia3" target="_blank">
                <img src={noticia3} alt="Noticia 3" />
                <p>Procesos empresariales para mejorar la eficiencia.</p>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Contáctanos</h3>
          <p>Email: contacto@miots.com</p>
          <p>Teléfono: +123 456 789</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
