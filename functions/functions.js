// // Declarando uma função
// function msg() {
//   console.log("Olá mundo, isso é uma função");
// }

// msg();
// msg();
// msg();

// Eu posso declarar uma variável no escopo global e criar um parâmetro com o mesmo nome para a função, mas o conteúdo da função só irá considerar o parâmetro, ignora totalmente a variável do escopo global.
let username = "Pedro";

// passando parâmetro username
function msg(username) {
  console.log("Olá", username);
}
// passando argumentos
msg("Fulano");
msg("Cicrano");

console.log(username);

function sum(a, b) {
  console.log(a + b);
}

sum(10, 32);
sum(98, 134);

// // a ordem importa
// function joinText(text1, text2, text3) {
//   console.log(text1, text2, text3);
// }
// joinText("Pedro", "Lucas", "Silva");

// posso definir um valor padrão para os parâmetros
function joinName(txt1 = "", txt2 = "", txt3 = "") {
  console.log(txt1, txt2, txt3);
}
joinName("Pedro");

console.log("###OUTRO EXEMPLO###");
function media(a, b, c) {
  let result = (a + b + c) / 3;

  // return vai ordenar a função à devolver o valor calculado para quem a chamou
  return result;
}
// existem duas maneiras de armazenar o valor retornado da função

// aqui o valor retornado da função será armazenado na variável response pois ela quem a chamou
let response = media(1, 2, 3);
console.log(response);

// aqui o valor retornado será diretamente dirigido ao console pois foi ele quem invocou a função agora
console.log(media(2, 4, 6));
