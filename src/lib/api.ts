// lib/api.js
import axios from 'axios';

export const fetchUser = async (userId: string) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
};
