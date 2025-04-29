import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = () =>{
 return(
   <section className="layout_grit listagem">
       <h1>Lista dos Filme</h1>
        <hr /> 

         <div className="tabela">
          <table>
              {/*cabecalho da tabela */}
              <thead>
                {/*tr => table row */}
                  <tr className="table_cabecalho">
                     {/*th => table head  => */}
                    
                     <th>Nome</th>
                     <th>Genero</th>
                     <th>Editar</th>
                     <th>Excluir</th>
                  </tr>
              </thead>
              {/*tbody => e o corpo da tabela */}
                <tbody>
                  <tr className="item_lista">
                     <td data-cell="Nome">Harry Potter e a pedra filosofal</td>
                      <td data-cell="Genero">Acao</td>
                     <td  data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                     <td  data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                    
                  </tr>
                </tbody>
          </table>
         </div>
   </section>

 )

}

export default Lista;