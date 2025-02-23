/*
Comentário para documentações em Javascript (Sintaxe de JSDoc). O JSDoc é um padrão que permite documentar seu código no próprio código fonte e ser interpretado pela IDE, É muito útil para detalhar os parâmetros, fluxo de funções e retorno de uma função.
*/

// Exemplo de JSDoc
/**
 * Autenticação do usuário
 * @param {String} email email do usuário.
 * @param {String} password mais de 6 caracteres.
 * @returns {Number} ID do usuário.
 */
function singIn(email, password) {
  //Fluxo de autenticação de usuário.

  return 7;
}

// Só de passar o mouse posso ver a documentação que criei no início.
singIn("pp15lucas@gmail.com", "123456");
