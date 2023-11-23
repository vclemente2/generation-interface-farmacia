import CardProduto from "../components/CardProduto";
import Footer from "../components/Footer/intex";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex flex-col grow">
          <div className="flex flex-wrap grow items-center justify-center gap-2 ">
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
