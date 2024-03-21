$(document).ready(function() {
    // Número fixo de vagas para cada turma
    var numeroVagas = {
      'Fundamentos': 25,
      'progamação': 20,
      'DBA': 15,
      'Matematica': 30
    };
  
    // Adicionar número fixo de alunos para cada turma
    $('.student-count').each(function() {
      var className = $(this).closest('tr').find('input[type="checkbox"]').attr('name');
      var alunos = Math.floor(Math.random() * (numeroVagas[className] - 5)) + 5;
      $(this).text(alunos);
    });
  
    // Marcar todas as caixas de seleção ao clicar no botão "Selecionar Tudo"
    $('#selectAllBtn').click(function() {
      $('input[type="checkbox"]').prop('checked', true);
      $('input[type="checkbox"]').closest('tr').addClass('selected');
    });
  
    // Limpar todas as seleções ao clicar no botão "Limpar Seleções"
    $('#clearSelectionBtn').click(function() {
      $('input[type="checkbox"]').prop('checked', false);
      $('input[type="checkbox"]').closest('tr').removeClass('selected');
    });
  
    // Destacar linha ao marcar a caixa de seleção do "Inscrever-se"
    $('input[type="checkbox"]').change(function() {
      var isChecked = $(this).prop('checked');
      $(this).closest('tr').toggleClass('selected', isChecked);
    });
  
    // Finalizar a inscrição nas matrículas
    $('#finalizarBtn').click(function() {
      var turmasSelecionadas = $('input[type="checkbox"]:checked').closest('tr').find('td:first').map(function() {
        return $(this).text();
      }).get();
      var mensagem = 'Inscrições finalizadas nas seguintes turmas: ' + turmasSelecionadas.join(', ');
      alert(mensagem);
    });
  });
  

  <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Portal de inscrição</title>
  {/* Bootstrap core CSS */}
  <link
    href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    href="https://getbootstrap.com/docs/5.2/assets/img/favicons/apple-touch-icon.png"
    sizes="180x180"
  />
  <link
    rel="icon"
    href="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon-32x32.png"
    sizes="32x32"
    type="image/png"
  />
  <link
    rel="icon"
    href="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon-16x16.png"
    sizes="16x16"
    type="image/png"
  />
  <link
    rel="manifest"
    href="https://getbootstrap.com/docs/5.2/assets/img/favicons/manifest.json"
  />
  <link
    rel="mask-icon"
    href="https://getbootstrap.com/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
    color="#712cf9"
  />
  <link
    rel="icon"
    href="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon.ico"
  />
  <link
    href="https://getbootstrap.com/docs/4.6/examples/album/album.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="matricula.css" />
  <header>
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <img
            className="sppb-img-responsive"
            src="logos-wrapper.png"
            alt="Image"
            title=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>
  </header>
  <main role="main">
    <section className="jumbotron text-center">
      <div className="container">
        <h1>BEM VINDO AO PORTAL DE INSCRIÇÕES</h1>
        <p className="lead text-muted">
          Escolha quais cursos e turnos pretende ingressar!
        </p>
      </div>
    </section>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="container">
            <h1>Matrícula</h1>
            <h2>Aulas Diurnas</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Disciplina</th>
                  <th scope="col">Professor</th>
                  <th scope="col">Horário</th>
                  <th scope="col">Alunos</th>
                  <th scope="col">Vagas</th>
                  <th scope="col">Inscrever-se</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fundamentos de Redes de Computadores</td>
                  <td>Prof. Silva</td>
                  <td>Segunda-feira, 8:00 - 10:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">30</td>
                  <td>
                    <input type="checkbox" name="Fundamentos" />
                  </td>
                </tr>
                <tr>
                  <td>Linguagens de Programação</td>
                  <td>Prof. Pereira</td>
                  <td>Terça-feira, 9:00 - 11:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">25</td>
                  <td>
                    <input type="checkbox" name="progamação" />
                  </td>
                </tr>
                <tr>
                  <td>Segurança da Informação</td>
                  <td>Prof. Carvalho</td>
                  <td>Quarta-feira, 10:30 - 12:30</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">40</td>
                  <td>
                    <input type="checkbox" name="Fundamentos" />
                  </td>
                </tr>
                <tr>
                  <td>Empreendedorismo e Inovação</td>
                  <td>Prof. Ferreira</td>
                  <td>Quinta-feira, 13:00 - 15:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">35</td>
                  <td>
                    <input type="checkbox" name="DBA" />
                  </td>
                </tr>
                <tr>
                  <td>Gestão de Projetos de TI</td>
                  <td>Prof. Rodrigues</td>
                  <td>Sexta-feira, 11:00 - 13:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">25</td>
                  <td>
                    <input type="checkbox" name="Matematica" />
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Aulas Noturnas</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Disciplina</th>
                  <th scope="col">Professor</th>
                  <th scope="col">Horário</th>
                  <th scope="col">Alunos</th>
                  <th scope="col">Vagas</th>
                  <th scope="col">Inscrever-se</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Programação em Banco de Dados</td>
                  <td>Prof. Oliveira</td>
                  <td>Segunda-feira, 18:30 - 20:30</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">20</td>
                  <td>
                    <input type="checkbox" name="DBA" />
                  </td>
                </tr>
                <tr>
                  <td>Matemática Aplicada à Informática</td>
                  <td>Prof. Martins</td>
                  <td>Terça-feira, 19:00 - 21:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">35</td>
                  <td>
                    <input type="checkbox" name="Matematica" />
                  </td>
                </tr>
                <tr>
                  <td>Desenvolvimento de Aplicativos Móveis</td>
                  <td>Prof. Santos</td>
                  <td>Quarta-feira, 18:00 - 20:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">25</td>
                  <td>
                    <input type="checkbox" name="Matematica" />
                  </td>
                </tr>
                <tr>
                  <td>Qualidade de Software:</td>
                  <td>Prof. Souza</td>
                  <td>Quinta-feira, 19:00 - 21:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">40</td>
                  <td>
                    <input type="checkbox" name="Matematica" />
                  </td>
                </tr>
                <tr>
                  <td>Sistemas Operacionais</td>
                  <td>Prof. Costa</td>
                  <td>Sexta-feira, 19:00 - 21:00</td>
                  <td className="student-count">0</td>
                  <td className="vacancy-count">35</td>
                  <td>
                    <input type="checkbox" name="Matematica" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container">
            <button id="selectAllBtn" className="btn btn-primary">
              Selecionar Tudo
            </button>
            <button id="clearSelectionBtn" className="btn btn-secondary">
              Limpar Seleções
            </button>
            <button id="finalizarBtn" className="btn btn-success">
              Finalizar Inscrição
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="text-muted">
    <div className="container"></div>
  </footer>
  <header>
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <img
            className="sppb-img-responsive"
            src="logos-wrapper.svg"
            alt="Image"
            title=""
          />
        </a>
      </div>
    </div>
  </header>
</>

