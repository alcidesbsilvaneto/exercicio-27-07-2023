import { gerarEmpresas } from "./gerar-empresas.js";

const empresas = gerarEmpresas(100);

let biggestOrder;
let smallerOrder;

for (const empresa of empresas) {
  for (const pedido of empresa.pedidos) {
    if (!biggestOrder || biggestOrder.valor < pedido.valor) {
      biggestOrder = pedido;
    }
    if (!smallerOrder || smallerOrder.valor > pedido.valor) {
      smallerOrder = pedido;
    }
  }
}

console.log(`Aqui está o maior pedido:`);
console.log(biggestOrder);

console.log("\nAqui está o menor pedido:");
console.log(smallerOrder);
