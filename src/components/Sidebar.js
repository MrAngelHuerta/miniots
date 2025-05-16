import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => navigate('/')}>Inicio</li>
        <li onClick={() => navigate('/usuarios')}>Usuarios</li>
        <li onClick={() => navigate('/equipo-ots')}>Equipo OTS</li>
        <li onClick={() => navigate('/alianzas')}>Alianzas</li>
      </ul>
    </nav>
  );
}
