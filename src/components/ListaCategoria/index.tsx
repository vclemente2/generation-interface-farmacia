import { useEffect, useState } from "react";
import { listarCategorias } from "../../Services/CategoriaService";
import CardCategoria from "../CardCategoria";

export default function ListaCategoria() {
  const [listaCategorias, setListaCategorias] = useState<any[]>([]);

  useEffect(() => {
    async function buscarCategorias() {
      const response = await listarCategorias();
      setListaCategorias(response);
    }

    buscarCategorias();
  }, []);
  return (
    <div>
      <ul>
        {listaCategorias.map((item, index) => (
          <CardCategoria></CardCategoria>
        ))}
      </ul>
    </div>
  );
}
