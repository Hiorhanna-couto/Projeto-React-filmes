//import { Fragment } from "react"; // vc pode usar (fragmet) ou <> ...</> 

import { Fragment, useEffect, useState } from "react";
import api from "../../Services/services"
import Swal from 'sweetalert2';

import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/hearder/Header";
import Lista from "../../components/lista/Lista";


const CadastroFilme = () => {

  const [listaGenero, setListaGenero] = useState([]);
  const [genero, setGenero] = useState("");
  const [filme, setFilme] = useState("");

  function alertar(icone, mensagem) {
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
  //funcao para trazer os genero no meu select
  async function listarGenero() {
    try {
      const resposta = await api.get("genero");
      setListaGenero(resposta.data);
    } catch (error) {
      console.log(error);

    }
  }

  async function cadastrarFilme(evt) {
   (evt).preventDefault();
    if (filme.trim() !== "") {

      //Tratamento de excacao
      try {
        await api.post("filme", { titulo: filme, idGenero: genero });
        alertar("success", "Sucesso! Cadastro reslizado com sucesso!")
        setFilme("");
        setGenero("");
      } catch (error) {
        console.log(error);

      }
      //alert("foi um sucesso ")
      //chamado o cadastrarFilme!
    } else {
      alertar("error", "Erro! Preencha o campo")

    }



  }






  useEffect(() => {
    listarGenero();
  }, [])


  return (
    <>
      <Header />
      <main>
        <Cadastro
          tituloCadastro="Cadastro de Filme"
          placeholder="filme"

          lista={listaGenero}

          funcCadastro={cadastrarFilme}
          valorInput={filme}
          setvalorInput={setFilme}

          valorSelect={genero}
          setvalorSelect={setGenero}

        />
        <Lista
          tituloLista="Filmes"

        />
      </main>
      <Footer />

    </>
  )
}
export default CadastroFilme;