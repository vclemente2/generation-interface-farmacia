import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-green-900 text-white flex justify-between px-16 py-8">
      <div className="container flex justify-between text-lg">
        <h3>Farmacia Generation</h3>
        <nav className="flex justify-center items-center">
          <ul className="flex gap-4 justify-center items-center">
            <li className="hover:text-xl rounded px-2">
              <Link to="/">Categorias</Link>
            </li>
            <li className="hover:text-xl rounded px-2">
              <Link to="/">Produtos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
