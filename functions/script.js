// Arrow functions

const message1 = () => {
  console.log("Olá Arrow Function");
};
console.log(message1);
message1();

//passando parâmetros para arrow functions
const message2 = (username, email) => {
  console.log(`Olá ${username}, seu e-mail é: ${email}`);
};

message2("Pedro", "pp15lucas@gmail.com");

// Callback
console.log("### CALLBACK ###");

//Callback Function ou Callback de função é uma função sendo passada para outra função através de argumentos.

function execute(taskname = String, callback) {
  console.log("Executando a tarefa:", taskname);

  callback();
  console.log("--------");

  // As funções passadas por parâmetros só são exexutadas dentro desta função
}

function callback() {
  console.log("Tarefa finalizada.");
}

// Passando para a função uma função já pronta
execute("Download do aquivo", callback);

// Criando a função no próprio parâmetro (Função anonima)
execute("Atualizar arquivo", function () {
  console.log("função de callback com uma função anônima.");
});

// Criando a função dentro do parâmetro (arrow function)
execute("Excluir arquivo", () => {
  console.log("Arquivo deletado pela arrow function");
});

// Se vou executar apenas UMA linha, posso passar a função sem a utilização das chaves {}, mas se houver mais linhas de código...sim precisará das chaves.
execute("Salvar arquivo", () => console.log("Arquivo salvo"));
