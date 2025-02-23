// Função anônima/não possui nome

/**
 * Função anônima. É uma função sem nomenclatura mas que são armazenadas em variáveis, "var", "let" ou "const"
 */
const showMsg = function () {
  return "Olá Pedro";
};
console.log(showMsg());

// Função anônima com parâmetro
const showMsg2 = function (name, msg) {
  return "Olá, " + name + msg;
};
console.log(showMsg2("Pedro Lucas", " tudo bem?"));
