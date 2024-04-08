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

// Verificando o estado de login ao carregar a página
window.addEventListener('load', function() {
  if (!localStorage.getItem('loggedIn')) {
    // Se o usuário não estiver logado, redirecionar para a página de login
    window.location.href = 'index.html';
  }
});
