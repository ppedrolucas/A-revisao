// Hosting de função

showMsg("Olá, Pedro");

function showMsg(msg) {
  console.log(msg);
  endLine();

  // Posso declarar uma função dentro de outra. Essa função só existe neste escopo, é impossível usá-la fora da função showMsg
  function endLine() {
    console.log("------");
  }
}

showMsg("Tudo bem");
