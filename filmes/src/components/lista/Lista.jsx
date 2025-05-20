import "./Lista.css"


import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
  return (
    <>
      <section className="layout_grid listagem">
        <h1>Lista dos {props.tituloLista}</h1>
        <hr />
        <div className="tabela">
          <table>
            <thead>

              <tr className="table_cabecalho">
                <th>Nome</th>
                <th style={{ display: props.nomeGenero }}>Gênero</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>

            </thead>

            <tbody>
              {props.Lista && props.Lista.length > 0 ? (
                //vamos mapear os item da lista 
                props.Lista.map((item) => (

                  <tr className="item_lista" key={item.idGenero}>
                    <td data-cell="Nome">
                      {item.nome}
                    </td>
                    <td data-cell="Gênero" style={{ display: props.nomeGenero }}>Acao</td>
                    <td data-cell="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                    <td data-cell="Excluir">
                       <button>
                        <img src={Excluir} alt="Imagem de uma caixa de lixo"
                       onClick={() => props.funcExcluir(item)} />
                      </button> 
                  
                    </td>
                  </tr>

                ))

              ) :
                (
                  <p>Nenhum genero foi encontrado.</p>
                )
              }

            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
export default Lista;