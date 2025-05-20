import './EquipoOTS.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

const equipoEjemplo = [
  {
    id: 1,
    foto: 'https://via.placeholder.com/50',
    nombre: 'Laura',
    paterno: 'Sánchez',
    materno: 'Pérez',
    descripcion: 'Desarrolladora Frontend',
    caracteristicas: 'React, UI/UX',
    email: 'laura@equipo.com',
  },
  {
    id: 2,
    foto: 'https://via.placeholder.com/50',
    nombre: 'Miguel',
    paterno: 'Torres',
    materno: 'Gómez',
    descripcion: 'Backend Developer',
    caracteristicas: 'Python, Django',
    email: 'miguel@equipo.com',
  },
];

export default function EquipoOTS() {
  return (
    <div className="equipo-wrapper">
      <div className="equipo-header">
        <h2>Equipo OTS</h2>
        <button className="nuevo-btn">➕ Nuevo Integrante</button>
      </div>

      <input className="busqueda" placeholder="🔍 Búsqueda..." />

      <table className="tabla-equipo">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Descripción</th>
            <th>Características</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipoEjemplo.map((miembro) => (
            <tr key={miembro.id}>
              <td>
                <img src={miembro.foto} alt="Foto" className="foto-equipo" />
              </td>
              <td>{miembro.nombre}</td>
              <td>{miembro.paterno}</td>
              <td>{miembro.materno}</td>
              <td>{miembro.descripcion}</td>
              <td>{miembro.caracteristicas}</td>
              <td>{miembro.email}</td>
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
