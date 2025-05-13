import { useEffect, useState } from "react";

import api from "../../Services/services";
//importar
import Swal from 'sweetalert2'

//importacao de componentes:
import Lista from "../../components/lista/Lista";
import Cadastro from "../../components/cadastro/Cadastro";
import Header from "../../components/hearder/Header";
import Footer from "../../components/footer/Footer";

const CadastroGenero = () => {

  // nome do genero 
  const [genero, setGenero] = useState("");

  function alerta(icone, mensagem) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: icone,
      title: mensagem
    });


  }


  async function CadastrarGenero(evt) {
    evt.preventDefault();

    //verificar se o input esta vindo vazio
    if (genero.trim() != "") {
      //try => tentar (o esperado )
      //catch => lanca a excecao
      try {
        //cadastrar em genero:post
        await api.post("genero", { nome: genero });
        alerta("success", "Cadastro realizado com sucesso!")
        setGenero("");
      } catch (error) {
        alerta("error", "Error! Entre em contato com o suporte!")
        console.log(error);
      }
    } else {
      alerta("error", "Erro! Preencha o campo")

    }
  }



  // teste:validar o genero

  // useEffect(() =>{
  // console.log(genero);
  // },[genero])
  //fim do teste

  return (
    <>
      <Header />
      <main>
        <Cadastro
          tituloCadastro="Cadastro de Genero"
          visibilidade="none"
          placeholder="genero"

          //atribuindo a funcao:
          funcCadastro={CadastrarGenero}
          //Atribuindo o volar ao input:
          valorInput={genero}
          //atribuindo a funcao que Atualizar o meu genero:
          setValorInput={setGenero}
        />
        <Lista
          tituloLista=" Generos"
          nomeGenero=""
        />
      </main>
      <Footer />
    </>


  )
}
export default CadastroGenero;