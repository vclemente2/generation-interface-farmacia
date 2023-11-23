import { Link } from "react-router-dom";
import { excluirCategoria } from "../../Services/CategoriaService";

interface CardProps {
  id: number;
  nome: string;
  descricao: string;
}

export default function CardCategoria(props: CardProps) {
  return (
    <div className="flex flex-col gap-8 bg-green-100 rounded-lg border min-w-[20%] py-2 px-4">
      <h3 className="text-lg">{props.nome}</h3>
      <span>{props.descricao}</span>
      <div className="flex gap-1">
        <Link
          to="/atualizarCategoria"
          className="text-center text-white bg-lime-600 hover:bg-lime-400 px-4 py-1 rounded-md w-full"
        >
          Atualizar
        </Link>
        <Link
          to="/excluirCategoria"
          onClick={() => excluirCategoria(props.id)}
          className="text-center text-white bg-red-500 hover:bg-red-400 px-4 py-1 rounded-md w-full"
        >
          Excluir
        </Link>
      </div>
    </div>
  );
}
