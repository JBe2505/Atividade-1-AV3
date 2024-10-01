const valorMax = 100000;

const acoes = {
  A: { 
    custo: 30000,
    retorno: 40000 
  },
  B: { 
    custo: 50000,
    retorno: 60000
  },
  C: { 
    custo: 40000, 
    retorno: 45000 
  },
  D: { 
    custo: 10000, 
    retorno: 15000 
  },
  E: { 
    custo: 20000, 
    retorno: 25000 
  },
};

function razao(acao) {
  return acao.custo / acao.retorno;
}

let items = [];

for (let chave in acoes) {
  let acao = acoes[chave];
  items.push({ nome: chave, custo: acao.custo, retorno: acao.retorno, razao: razao(acao) });
}

items.sort(function(itemA, itemB) {
  return itemA.razao - itemB.razao;
});

let valorAtual = 0;
let acoesEscolhidas = [];
S
for (let i = 0; i < items.length; i++) {
  let item = items[i];
  
  if (valorAtual + item.custo <= valorMax) {
    do {
      acoesEscolhidas.push(item);
      valorAtual += item.custo;
    } while (valorAtual + item.custo <= valorMax);
  }
}

console.log(acoesEscolhidas);
