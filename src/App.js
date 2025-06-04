import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import EquipoOTS from './pages/EquipoOTS';
import Alianzas from './pages/Alianzas';
import Login from './pages/Login';
import Home from './pages/Home';

import Ruta1 from './pages/Ruta1';
import Ruta2 from './pages/Ruta2';
import Ruta3 from './pages/Ruta3';

import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/ruta1" element={<Ruta1 />} />
        <Route path="/ruta2" element={<Ruta2 />} />
        <Route path="/ruta3" element={<Ruta3 />} />

        {/* Rutas protegidas */}
        <Route
          path="/panel"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="equipo-ots" element={<EquipoOTS />} />
          <Route path="alianzas" element={<Alianzas />} />
        </Route>
      </Routes>
    </Router>
  );
}
