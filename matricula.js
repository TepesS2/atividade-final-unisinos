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
      if ($('input[type="checkbox"]:checked').length > 0) {
        // Redirecionar para a página de finalização
        window.location.href = 'finalizacao.html';
      } else {
        // Exibir mensagem de alerta se nenhum checkbox estiver marcado
        alert('Por favor, selecione pelo menos uma disciplina para se inscrever.');
      }
    });
  });
  