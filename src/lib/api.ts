// lib/api.js
import axios from 'axios';

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`/api/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
};
