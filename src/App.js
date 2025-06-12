import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import EquipoOTS from './pages/EquipoOTS';
import Alianzas from './pages/Alianzas';
import Login from './pages/Login';
import Home from './pages/Home';
import Noticia1 from './pages/Noticia1';
import Noticia2 from './pages/Noticia2';
import Noticia3 from './pages/Noticia3';
import Noticias from './pages/Noticias';


import OTS from './pages/OTS';
import Colabora from './pages/Colabora';
import Contactanos from './pages/Contactanos';

import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/ots" element={<OTS />} />
        <Route path="/colabora" element={<Colabora />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/noticia1" element={<Noticia1 />} />
        <Route path="/noticia2" element={<Noticia2 />} />
        <Route path="/noticia3" element={<Noticia3 />} />
        <Route path="/noticias" element={<Noticias />} />



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
