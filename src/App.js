import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import EquipoOTS from './pages/EquipoOTS';
import Alianzas from './pages/Alianzas';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Página de bienvenida pública */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Rutas protegidas bajo /panel */}
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