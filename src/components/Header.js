import React from 'react';

export default function Header() {
  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <header className="app-header">
      <span className="logout" onClick={handleLogout}>Cerrar sesión</span>
    </header>
  );
}
