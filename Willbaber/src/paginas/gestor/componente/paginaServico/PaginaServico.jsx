import "./PaginaServico.css"

const PaginaServico = () => {
  return (
    <>
      <div class="pagina-servicos">

        {/*<!-- TOPO -->*/}

        <div class="topo-servicos">

          <div>
            <h1 class="titulo-servicos">
              Serviços & Preços
            </h1>

            <p class="subtitulo-servicos">
              Gerencie os serviços oferecidos e ajuste preços
            </p>
          </div>

          <div class="acoes-topo-servicos">

            <button class="botao-ver-site">
              Ver site
            </button>

            <div class="avatar-admin">
              A
            </div>

          </div>

        </div>

         {/*<!-- BOTOES -->*/}

        <div class="barra-acoes-servicos">

          <div class="quantidade-servicos">
            6 serviços
          </div>

          <div class="grupo-botoes-servicos">

            <button class="botao-editar-precos">
              Editar Preços
            </button>

            <button class="botao-novo-servico">
              + Novo Serviço
            </button>

          </div>

        </div>

         {/*<!-- TABELA -->*/}

        <div class="container-tabela-servicos">

          <table class="tabela-servicos">

            <thead>

              <tr>
                <th>Serviço</th>
                <th>Categoria</th>
                <th>Duração</th>
                <th>Preço</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>

            </thead>

            <tbody>

                {/*<!-- ITEM -->*/}

              <tr>
                <td>
                  <div class="informacoes-servico">
                    <div class="icone-servico">
                      ✂
                    </div>
                    <div>
                      <div class="titulo-item-servico">
                        Corte de Cabelo
                        <span class="tag-popular">
                          Popular
                        </span>
                      </div>
                      <p class="descricao-servico">
                        Corte clássico ou moderno com acabamento...
                      </p>
                    </div>
                  </div>
                </td>
                <td>Cabelo</td>
                <td>30 min</td>
                <td class="valor-servico">
                  R$ 45
                </td>
                <td>
                  <span class="status-ativo">
                    Ativo
                  </span>
                </td>
                <td>
                  <div class="acoes-servico">
                    <button class="botao-editar">
                      ✏
                    </button>
                    <button class="botao-excluir">
                      🗑
                    </button>
                  </div>
                </td>
              </tr>

            {/*<!-- ITEM -->*/}

              <tr>

                <td>

                  <div class="informacoes-servico">

                    <div class="icone-servico">
                      ♂
                    </div>

                    <div>

                      <div class="titulo-item-servico">
                        Barba

                        <span class="tag-popular">
                          Popular
                        </span>

                      </div>

                      <p class="descricao-servico">
                        Aparo e modelagem com navalha e produtos...
                      </p>

                    </div>

                  </div>

                </td>

                <td>Barba</td>

                <td>25 min</td>

                <td class="valor-servico">
                  R$ 35
                </td>

                <td>
                  <span class="status-ativo">
                    Ativo
                  </span>
                </td>

                <td>

                  <div class="acoes-servico">

                    <button class="botao-editar">
                      ✏
                    </button>

                    <button class="botao-excluir">
                      🗑
                    </button>

                  </div>

                </td>

              </tr>

            {/*<!-- ITEM -->*/}

              <tr>

                <td>

                  <div class="informacoes-servico">

                    <div class="icone-servico">
                      ★
                    </div>

                    <div>

                      <div class="titulo-item-servico">
                        Corte + Barba

                        <span class="tag-popular">
                          Popular
                        </span>

                      </div>

                      <p class="descricao-servico">
                        Combo completo com desconto especial...
                      </p>

                    </div>

                  </div>

                </td>

                <td>Combo</td>

                <td>55 min</td>

                <td class="valor-servico">
                  R$ 70
                </td>

                <td>
                  <span class="status-ativo">
                    Ativo
                  </span>
                </td>

                <td>

                  <div class="acoes-servico">

                    <button class="botao-editar">
                      ✏
                    </button>

                    <button class="botao-excluir">
                      🗑
                    </button>

                  </div>

                </td>

              </tr>

             {/*<!-- ITEM -->*/}

              <tr>

                <td>

                  <div class="informacoes-servico">

                    <div class="icone-servico">
                      ◌
                    </div>

                    <div>

                      <div class="titulo-item-servico">
                        Hidratação Capilar
                      </div>

                      <p class="descricao-servico">
                        Tratamento profundo para cabelos danific...
                      </p>

                    </div>

                  </div>

                </td>

                <td>Tratamento</td>

                <td>40 min</td>

                <td class="valor-servico">
                  R$ 55
                </td>

                <td>
                  <span class="status-ativo">
                    Ativo
                  </span>
                </td>

                <td>

                  <div class="acoes-servico">

                    <button class="botao-editar">
                      ✏
                    </button>

                    <button class="botao-excluir">
                      🗑
                    </button>

                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default PaginaServico