import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/hearder/Header";
import Footer from "../../components/footer/Footer";

const CadastroGenero = () => {

  return (
    <>
      <Header/>
      <main>
        <Cadastro
          tituloCadastro="Cadastro de Genero"
          visibilidade="none"
          placeholder="genero"

        />
        <Lista
          titulolista="Lista de Genero"
          visibilidade="none"
        />
      </main>
      <Footer />
    </>


  )

}

export default CadastroGenero;