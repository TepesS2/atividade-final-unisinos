 /* eslint-disable */
// Array para armazenar os usuários registrados
var users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verificando se o usuário e a senha correspondem a um usuário registrado
  var user = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    // Armazenando o estado de login no armazenamento local do navegador
    localStorage.setItem('loggedIn', 'true');
    // Redirecionando para a página de matrícula
    window.location.href = 'matricula.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;

  // Verificando se o nome de usuário já está em uso
  var existingUser = users.find(function(user) {
    return user.username === newUsername;
  });

  if (existingUser) {
    alert('Nome de usuário já em uso. Escolha outro.');
  } else {
    // Adicionando o novo usuário ao array de usuários
    users.push({ username: newUsername, password: newPassword });
    // Salvando os usuários no armazenamento local
    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuário registrado com sucesso.');
    // Limpando os campos do formulário
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
  }
});

// Função para logout
document.getElementById('logoutBtn').addEventListener('click', function(event) {
  event.preventDefault();
  // Removendo o estado de login do armazenamento local do navegador
  localStorage.removeItem('loggedIn');
  // Redirecionando de volta para a página de login
  window.location.href = 'index.html';
});

// Verificando o estado de login ao carregar a página
window.addEventListener('load', function() {
  if (!localStorage.getItem('loggedIn')) {
    // Se o usuário não estiver logado, redirecionar para a página de login
    window.location.href = 'index.html';
  }
});

// Exemplo de uso do jQuery
$(document).ready(function() {
  $('input[type="checkbox"]').change(function() {
    // Verifica se a caixa de seleção foi marcada ou desmarcada
    if ($(this).is(':checked')) {
      $(this).closest('tr').addClass('selected');
    } else {
      $(this).closest('tr').removeClass('selected');
    }
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
  <link rel="stylesheet" href="style.css" />
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
          Realize aqui o login para acessar as matriculas.
        </p>
      </div>
    </section>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-6">
              <h2>Login</h2>
              <form id="loginForm">
                <div className="form-group">
                  <label htmlFor="username">Usuário:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required=""
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h2>Registrar</h2>
              <form id="registerForm">
                <div className="form-group">
                  <label htmlFor="newUsername">Novo Usuário:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="newUsername"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">Nova Senha:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    required=""
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="text-muted">
    <div className="container"></div>
  </footer>
</>
export default App;