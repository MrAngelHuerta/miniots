import { Outlet, Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineTeam } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
import './Layout.css';

export default function Layout({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="layout-wrapper">
      <header className="app-header">
        <div className="header-title">Panel de administración</div>
        <div className="logout" onClick={handleLogout}>
          Cerrar sesión
        </div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <nav>
            <ul>
              {/* Links del panel */}
              <li>
                <Link to="/panel">
                  <AiOutlineHome className="icon" /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/panel/usuarios">
                  <AiOutlineUser className="icon" /> Usuarios
                </Link>
              </li>
              <li>
                <Link to="/panel/equipo-ots">
                  <AiOutlineTeam className="icon" /> Equipo OTS
                </Link>
              </li>
              <li>
                <Link to="/panel/alianzas">
                  <FaHandshake className="icon" /> Alianzas
                </Link>
              </li>

              {/* Nuevas rutas fuera de /panel */}
              <li>
                <Link to="/ruta1">
                  {/* Puedes poner un icono si quieres, sino solo texto */}
                  Ruta 1
                </Link>
              </li>
              <li>
                <Link to="/ruta2">Ruta 2</Link>
              </li>
              <li>
                <Link to="/ruta3">Ruta 3</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
