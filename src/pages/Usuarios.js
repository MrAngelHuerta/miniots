import './Usuarios.css';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const usuariosEjemplo = [
  {
    id: 1,
    nombre: 'Ana',
    paterno: 'García',
    materno: 'López',
    email: 'ana@example.com',
    rol: 'Cliente',
    estatus: 'Activo',
    activo: true,
    admin: false,
  },
  {
    id: 2,
    nombre: 'Carlos',
    paterno: 'Ruiz',
    materno: 'Mendoza',
    email: 'carlos@example.com',
    rol: 'Administrador',
    estatus: 'Nuevo',
    activo: true,
    admin: true,
  },
  {
    id: 3,
    nombre: 'Lucía',
    paterno: 'Martínez',
    materno: 'Hernández',
    email: 'lucia@example.com',
    rol: 'Cliente',
    estatus: 'Activo',
    activo: true,
    admin: false,
  },
];

export default function Usuarios() {
  return (
    <div className="usuarios-wrapper">
      <div className="usuarios-header">
        <h2>Usuarios</h2>
        <button className="nuevo-btn">➕ Nuevo Usuario</button>
      </div>

      <input className="busqueda" placeholder="🔍 Búsqueda..." />

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estatus</th>
            <th>Activo</th>
            <th>Admin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosEjemplo.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.paterno}</td>
              <td>{u.materno}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
              <td>{u.estatus}</td>
              <td>
                {u.activo ? (
                  <FaCheck color="green" />
                ) : (
                  <FaTimes color="red" />
                )}
              </td>
              <td>
                {u.admin ? (
                  <FaCheck color="green" />
                ) : (
                  <FaTimes color="red" />
                )}
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
