import axios from 'axios';
import { API_URL } from "./configuracionApi";
import { Usuario } from '../types/Usuario';

const recurso = 'users'

export async function getUsuarios(): Promise<Usuario[]> {
  const respuesta = await axios.get(`${API_URL}${recurso}`);
  return respuesta.data;
};
