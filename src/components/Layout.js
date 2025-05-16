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
      {/* ... resto igual */}

      <div className="app-body">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <AiOutlineHome className="icon" /> Inicio
                </Link>
              </li>
              <li>
                <Link to="/usuarios">
                  <AiOutlineUser className="icon" /> Usuarios
                </Link>
              </li>
              <li>
                <Link to="/equipo-ots">
                  <AiOutlineTeam className="icon" /> Equipo OTS
                </Link>
              </li>
              <li>
                <Link to="/alianzas">
                  <FaHandshake className="icon" /> Alianzas
                </Link>
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