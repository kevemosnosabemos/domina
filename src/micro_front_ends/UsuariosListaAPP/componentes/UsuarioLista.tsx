import { useEffect, useState } from 'react';
import { getUsuarios } from '../../../api/usuarioApi';
import { Usuario } from '../../../types/Usuario';
import UsuarioInformacion from './UsuarioInformacion';

type Props = {
  filtroBusqueda: string;
  paginaActual: number;
  elementosPorPagina: number;
}

export default function UsuarioLista({ filtroBusqueda, paginaActual, elementosPorPagina }: Props): React.JSX.Element {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Cargar lista de usuarios.
  useEffect(() => {
    getUsuarios().then(setUsuarios);
  }, []);

  // Filtrar usuarios por nombres consumiendo el filtro que pasamos en el componente de busqueda, lo pasamos a minuscula para uso general.
  const filtrarUsuarios = usuarios.filter(usuarios =>
    usuarios.name.toLowerCase().includes(filtroBusqueda.toLowerCase())
  );

  // Creaciom una nueva paginacion con solo los resultados filtrados.
  const inicio = (paginaActual - 1) * elementosPorPagina;
  const usuariosFiltrados = filtrarUsuarios.slice(inicio, inicio + elementosPorPagina);

  return (
    <div>
      {usuariosFiltrados.map(usuario => <UsuarioInformacion key={usuario.id} usuario={usuario} />)}
      <p>Página {paginaActual} de {Math.ceil(filtrarUsuarios.length / elementosPorPagina)}</p>
    </div>
  );
};