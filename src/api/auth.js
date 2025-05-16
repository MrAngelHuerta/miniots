import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Cambia esto según tu backend

export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};
