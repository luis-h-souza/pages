
enviar.addEventListener("click", () => {

  const nome = document.querySelector("#nome").value
  const nomeInput = document.querySelector('.nome-input')
  const nomeIcon = document.querySelector('.nome-icon')

  const email = document.getElementById('email').value
  const emailInput = document.querySelector('.email-input')
  const emailIcon = document.querySelector('.email-icon')

  let sexo = document.querySelector("#masc", "#fem")
  const sexoInput = document.querySelector('.sexo-input')
  const sexoIcon = document.querySelector('.sexo-icon')

  const estado = document.getElementById('estado').value
  const estadoInput = document.querySelector('.estado-input')
  const estadoIcon = document.querySelector('.estado-icon')

  const comentario = document.getElementById('comentario').value
  const comentarioInput = document.querySelector('.comentario-input')
  const comentarioIcon = document.querySelector('.comentario-icon')

  // verificação do nome
  let verificacaoNome = nome.length <= 3 ? nomeInput.textContent = `Digite um nome com mais de 4 caracteres` : nomeIcon.removeAttribute("hidden")
  if (verificacaoNome = nomeIcon[hidden]) {
    nomeInput.textContent = ""
  }

  // verificação do e-mail
  let posicao = email.indexOf('@' && '.')
  console.log(posicao);
  posicao === -1 ? emailInput.textContent = `O e-mail precisa ter os caracteres especiais "@" e "."` : emailIcon.removeAttribute("hidden");

  // verificação do sexo
  let sexoSelecionado
  sexoSelecionado = sexo.checked ? "masculino" : "feminino"

  if (!sexo.checked) {
    sexoInput.textContent = `Seleciona uma opção`
  } else {
    sexoIcon.removeAttribute("hidden");
  }

  // verificação do estado
  if (estado == "") {
    estadoInput.textContent = `Selecione um estado`
  } else {
    estadoIcon.removeAttribute("hidden")
  }

  // verificação do comentários
  comentario.length <= 20 ? comentarioInput.textContent = `Faça um comentário de pelo menos 10 palavras` : comentarioIcon.removeAttribute("hidden")

})
/*
Criar em Javascript a validação do formulário de contato do site Empresa de Limeira.
Considere as seguintes regras de validação:
- O nome deve ter no mínimo 5 caracteres
- O email precisa ter um @ e um .
- Uma das opções do campo sexo precisa ser selecionada
- O estado precisa ser selecionado
- O comentário deve ter pelo menos 10 palavras

Para esta atividade será necessário usar algumas funções do Javascript:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/