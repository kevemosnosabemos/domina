type Props = {
  onSearch: (value: string) => void;
};

export default function Busqueda({ onSearch }: Props): React.JSX.Element {
  return (
    <input
      type="text"
      placeholder="Buscar usuario por nombre..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

