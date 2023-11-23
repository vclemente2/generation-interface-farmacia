import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CategoriaAtualizada from "./components/CategoriaAtualizada";
import CategoriaExcluida from "./components/CategoriaExcluida";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer/intex";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/atualizarCategoria" Component={CategoriaAtualizada} />
        <Route path="/excluirCategoria" Component={CategoriaExcluida} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
