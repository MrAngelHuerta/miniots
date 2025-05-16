import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import EquipoOTS from './pages/EquipoOTS';
import Alianzas from './pages/Alianzas';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        <Route
          path="/"
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