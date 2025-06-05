import { lazy, Suspense, useState } from 'react';
import Busqueda from '../componentes/Busqueda';
import '../estilos/Home.css';

const UsuarioLista = lazy(() => import('../micro_front_ends/UsuariosListaAPP')); // La carpeta micro_front_ends es como simulare que tengo un micro front end

export default function Home(): React.JSX.Element {
  const [filtroBusqueda, setFiltroBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 5;

  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">Listado de Usuarios</h1>

      <Busqueda onSearch={valor => {
        setFiltroBusqueda(valor);
        setPaginaActual(1);
      }} />

      <Suspense fallback={<p>Cargando lista de usuarios...</p>}>
        <UsuarioLista // Mostrar un pensaje de carga mientras esta obteniendo los datos de la api
          filtroBusqueda={filtroBusqueda}
          paginaActual={paginaActual}
          elementosPorPagina={elementosPorPagina}
        />
      </Suspense>

      <div className="botonera-navegacion">
        <button
          className="boton-navegacion"
          disabled={paginaActual === 1}
          onClick={() => setPaginaActual(p => p - 1)}
        >
          Anterior
        </button>

        <button
          className="boton-navegacion"
          onClick={() => setPaginaActual(p => p + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
