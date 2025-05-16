import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // cambia según tu backend

export const obtenerUsuarios = async () => {
  const res = await axios.get(`${API_URL}/usuarios`);
  return res.data;
};
