import '../estilos/UsuarioInformacion.css';
import { Usuario } from '../../../types/Usuario';

export default function UsuarioInformacion({ usuario }: { usuario: Usuario }): React.JSX.Element {
  return (
    <div className="usuario_contenedor">
      <h4>{usuario.name}</h4>
      <p>{usuario.email}</p>
      <p>{usuario.phone}</p>
    </div>
  );
}
