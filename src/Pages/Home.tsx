import CardCategoria from "../components/CardCategoria";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex flex-col grow">
          <div className="flex flex-wrap grow items-center justify-center gap-2 ">
            <CardCategoria
              id={1}
              nome="Categoria 01"
              descricao="Descrição Categoria 01"
              key={1}
            ></CardCategoria>
            <CardCategoria
              id={2}
              nome="Categoria 02"
              descricao="Descrição Categoria 02"
              key={2}
            ></CardCategoria>
            <CardCategoria
              id={3}
              nome="Categoria 03"
              descricao="Descrição Categoria 03"
              key={3}
            ></CardCategoria>
            <div></div>
          </div>
        </main>
      </div>
    </>
  );
}
