import './Alianzas.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

const alianzasEjemplo = [
  {
    id: 1,
    logo: 'https://via.placeholder.com/50',
    nombre: 'TechPartners',
    descripcion: 'Socios tecnológicos para soluciones de nube',
    link: 'https://techpartners.com',
  },
  {
    id: 2,
    logo: 'https://via.placeholder.com/50',
    nombre: 'Green Future',
    descripcion: 'Alianza ecológica para energías renovables',
    link: 'https://greenfuture.org',
  },
];

export default function Alianzas() {
  return (
    <div className="alianzas-wrapper">
      <div className="alianzas-header">
        <h2>Alianzas</h2>
        <button className="nuevo-btn">➕ Nueva Alianza</button>
      </div>

      <input className="busqueda" placeholder="🔍 Búsqueda..." />

      <table className="tabla-alianzas">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Link</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alianzasEjemplo.map((alianza) => (
            <tr key={alianza.id}>
              <td>
                <img
                  src={alianza.logo}
                  alt="Logo"
                  className="logo-alianza"
                />
              </td>
              <td>{alianza.nombre}</td>
              <td>{alianza.descripcion}</td>
              <td>
                <a
                  href={alianza.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {alianza.link}
                </a>
              </td>
              <td>
                <button className="btn editar">
                  <FaEdit />
                </button>
                <button className="btn eliminar">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
