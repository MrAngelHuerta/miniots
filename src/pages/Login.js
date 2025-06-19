import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({ setIsAuthenticated }) {
  const [username, setCorreo] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Intentando iniciar sesión con:', { username, password });

    try {
      const res = await fetch('http://localhost:8000/api/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      console.log('Respuesta del servidor:', res);

      if (!res.ok) {
        const errorText = await res.text(); // Esto te puede dar más pistas
        console.error('Error en la respuesta:', errorText);
        throw new Error('Credenciales inválidas');
      }

      const data = await res.json();
      console.log('Datos recibidos:', data);

      // Guarda el token (por ejemplo en localStorage)
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);

      setIsAuthenticated(true);
      navigate('/panel');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Correo"
          value={username}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
