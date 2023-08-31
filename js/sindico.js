const rua = document.querySelector("body");
const mes = document.querySelector('#mes-referencia');
const pesquisa = document.querySelector('#pesquisa');
const form = document.querySelector('form');
rua.style.backgroundColor = "blue";

const listaInformacaoDosApartamentos = [
  {
    id: 2,
    apartamento: "11",
    pago: [
      {
        status: false,
        mes: [1, 9, 3]
      },
      {
        status: true,
        mes: [5, 6, 3]
      }
    ],
  },

  {
    id: 3,
    apartamento: "12",
    pago: [
      {
        status: false,
        mes: [12, 8, 5]
      },
      {
        status: true,
        mes: [4, 1, 2]
      }
    ],
  },
  {
    id: 4,
    apartamento: "14",
    pago: [
      {
        status: false,
        mes: [1, 4, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 5,
    apartamento: "21",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 6,
    apartamento: "22",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 8,
    apartamento: "23",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 9,
    apartamento: "24",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 10,
    apartamento: "31",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 11,
    apartamento: "32",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 12,
    apartamento: "33",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 13,
    apartamento: "34",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 14,
    apartamento: "41",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 15,
    apartamento: "42",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 16,
    apartamento: "43",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 17,
    apartamento: "44",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 18,
    apartamento: "51",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 19,
    apartamento: "52",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 20,
    apartamento: "53",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 21,
    apartamento: "54",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 22,
    apartamento: "61",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 23,
    apartamento: "62",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 24,
    apartamento: "63",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 25,
    apartamento: "64",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 26,
    apartamento: "71",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 27,
    apartamento: "72",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 28,
    apartamento: "73",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 29,
    apartamento: "74",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 30,
    apartamento: "81",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 31,
    apartamento: "82",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 32,
    apartamento: "83",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 33,
    apartamento: "84",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 34,
    apartamento: "91",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 35,
    apartamento: "92",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 36,
    apartamento: "93",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 37,
    apartamento: "94",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 38,
    apartamento: "101",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 39,
    apartamento: "102",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 40,
    apartamento: "103",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 41,
    apartamento: "104",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 42,
    apartamento: "201",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 43,
    apartamento: "203",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 44,
    apartamento: "204",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 45,
    apartamento: "301",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 46,
    apartamento: "302",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 48,
    apartamento: "303",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 49,
    apartamento: "304",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 50,
    apartamento: "401",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 51,
    apartamento: "402",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 52,
    apartamento: "403",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 53,
    apartamento: "404",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 54,
    apartamento: "13",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
  {
    id: 55,
    apartamento: "202",
    pago: [
      {
        status: false,
        mes: [1, 2, 3]
      },
      {
        status: true,
        mes: [5, 6, 7]
      }
    ],
  },
];

const nomes = [
  "guilherme",
  "Cesar",
  "Luiz",
  "gustavo",
  "Andreia",
  "João",
  "sérgio",
  "rodolfo",
  "Flavio",
  "Vicente",
  "Alice",
  "Raimundo",
  "Patricia",
  "Daniel",
  "Rosa",
  "Flavia",
  "davi",
  "Fernanda",
  "Ana",
  "carolina",
  "Bruna",
  "felipe",
  "Max",
  "Mauro",
  "Eliza",
  "Enzo",
  "Gabriel",
  "Paulo",
  "Ariel",
  "Mauro",
  "Gabriela",
  "André",
  "Georgia",
  "Caetano",
  "Lucas",
  "Daniela",
  "Tiago",
  "Vitor",
  "Otávio",
  "Maria",
  "Mariana",
  "Nelson",
  "Tarcisio",
  "Helena",
  "Juliano",
  "Juliana",
  "Roberto",
  "Carla",
  "Inês",
  "Leda",
  "Fatima",
  "Lourdes"
];

form.addEventListener('submit', evento => evento.preventDefault());

nomes.forEach((nome, indice) => {
  const apartamento = listaInformacaoDosApartamentos[indice];
  apartamento.nome = nome; 
})

const listaDeApartamentosNaTela = Array.from(
  document.querySelectorAll(".apartamento")
).reverse();

mes.addEventListener('change', function(evento) {
  const mesReferencia = +evento.target.value;
  decideQuemEstaDevendo(listaInformacaoDosApartamentos, listaDeApartamentosNaTela, mesReferencia);
});

pesquisa.addEventListener('change', gerenciarPesquisa);
pesquisa.addEventListener('input', gerenciarPesquisa);

listaInformacaoDosApartamentos.sort(function (itemA, itemB) {
  if (Number(itemA.apartamento) < Number(itemB.apartamento)) {
    return -1;
  }

  if (Number(itemA.apartamento) > Number(itemB.apartamento)) {
    return 1;
  }

  return 0;
});

listaDeApartamentosNaTela.forEach(elemento => {
  elemento.addEventListener('contextmenu', gerenciarPagamento);
  elemento.addEventListener('click', gerenciarDevedor);
});

decideQuemEstaDevendo(listaInformacaoDosApartamentos, listaDeApartamentosNaTela);

function gerenciarDevedor(evento) {
  const target = evento.target;
  const id = +target.id;
  const mes = mesDeReferencia();

  incluirDevedor(id, mes);
  decideQuemEstaDevendo(listaInformacaoDosApartamentos, listaDeApartamentosNaTela, mes);
}

function gerenciarPagamento(evento) {
  evento.preventDefault();
  const target = evento.target;
  const id = +target.id;
  const mes = mesDeReferencia();

  recebePagamento(id, mes);
  decideQuemEstaDevendo(listaInformacaoDosApartamentos, listaDeApartamentosNaTela, mes);
}

function mesDeReferencia() {
  const mes = +document.querySelector('#mes-referencia').value;
  return isNaN(mes) ? 0 : mes;
}

function recebePagamento(idDoApartamento, mesAtual) {
  const index = listaInformacaoDosApartamentos.findIndex(apartamento => apartamento.id === idDoApartamento);
  const pagamentoIndex = listaInformacaoDosApartamentos[index].pago.findIndex(value => value.status);
  const pagouEsseMes = listaInformacaoDosApartamentos[index].pago[pagamentoIndex].mes.includes(mesAtual);

  const naoPagamentoIndex = listaInformacaoDosApartamentos[index].pago.findIndex(value => !value.status);
  const naoPagouEsseMes = listaInformacaoDosApartamentos[index].pago[naoPagamentoIndex].mes.findIndex(mes => mes);

  if (naoPagouEsseMes >= 0) {
    listaInformacaoDosApartamentos[index].pago[naoPagamentoIndex].mes = listaInformacaoDosApartamentos[index].pago[naoPagamentoIndex].mes.filter(mesInterno => mesInterno !== mesAtual);
  }

  if (!pagouEsseMes) {
    listaInformacaoDosApartamentos[index].pago[pagamentoIndex].mes.push(mesAtual);
  }
}

function incluirDevedor(idDoApartamento, mesAtual) {
  const index = listaInformacaoDosApartamentos.findIndex(apartamento => apartamento.id === idDoApartamento);
  const naoPagamentoIndex = listaInformacaoDosApartamentos[index].pago.findIndex(value => !value.status);
  const naoPagouEsseMes = listaInformacaoDosApartamentos[index].pago[naoPagamentoIndex].mes.includes(mesAtual);

  const pagamentoIndex = listaInformacaoDosApartamentos[index].pago.findIndex(value => value.status);
  const pagouEsseMes = listaInformacaoDosApartamentos[index].pago[pagamentoIndex].mes.findIndex(mes => mes);

  if(pagouEsseMes >= 0) {
    listaInformacaoDosApartamentos[index].pago[pagamentoIndex].mes = listaInformacaoDosApartamentos[index].pago[pagamentoIndex].mes.filter(mesInterno => mesInterno !== mesAtual);
  }

  if (!naoPagouEsseMes) {
    listaInformacaoDosApartamentos[index].pago[naoPagamentoIndex].mes.push(mesAtual);
  }
}

function decideQuemEstaDevendo(listaApartamentos, apartamentosNaTela, mesReferencia = 0) {
  for (let i = 0; i < listaApartamentos.length; i++) {
    const infoApartamento = listaApartamentos[i];
    const apartamento = apartamentosNaTela[i];

    alteraEstiloVisual(apartamento, 'reiniciar');

    apartamento.innerText = `${infoApartamento.apartamento} - ${infoApartamento.nome}`;
    apartamento.id = infoApartamento.id;

    if (mesReferencia > 0) {
      const naoEstaPagoNoMes = infoApartamento.pago.findIndex(value => !value.status && value.mes.includes(mesReferencia));
      const estaPagoNoMes = infoApartamento.pago.findIndex(value => value.status && value.mes.includes(mesReferencia));

      if (naoEstaPagoNoMes >= 0) {
        alteraEstiloVisual(apartamento, "devedor");
      }
      if(estaPagoNoMes>= 0){
        alteraEstiloVisual(apartamento,"pago")
      }
    } else {
      const naoEstaPago = infoApartamento.pago.find(value => !value.status);
      const temMesDevendo = naoEstaPago.mes.length;

      if (naoEstaPago && temMesDevendo > 0) {
        alteraEstiloVisual(apartamento, "devedor");
      }
    }
  }
}

function pesquisaApartamento(valorPesquisado) {
  const apartamentos = listaInformacaoDosApartamentos.filter(apartamento => {
    if (apartamento.apartamento === valorPesquisado) {
      return apartamento;
    }

    // Documentando por https://medium.com/thread-engineering/searching-and-sorting-text-with-diacritical-marks-in-javascript-45afef20e7f2#
    const nome = apartamento.nome.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    const valueClean = valorPesquisado.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    if (nome.search(valueClean) >= 0) {
      return apartamento;
    }
  });

  return apartamentos;
}

function exibeResultado(arrayApartamentos) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';

  arrayApartamentos.forEach(apartamento => {
    const p = document.createElement('p');
    p.innerText = `${apartamento.apartamento} - ${apartamento.nome}`;
    resultado.appendChild(p);
  });
}

function gerenciarPesquisa(evento) {
  const target = evento.target;
  let value = target.value;

  value = value.trim();

  if (value.length < 2) {
    exibeResultado([]);
    return;
  }

  const pesquisa = pesquisaApartamento(value);
  exibeResultado(pesquisa);
}

function alteraEstiloVisual(elemento, tipoRegra) {
// if (tipoRegra=== "devedor"){
//   elemento.style.backgroundColor= "green"
// }
// if (tipoRegra=== "pago"){
//   elemento.style.backgroundColor = "inherit"
// }
// if (tipoRegra=== "reiniciar"){
//   elemento.style.backgroundColor= "initial"
// }
const conjuntoRegras = {
  devedor:{
    backgroundColor: "green",
    color:"white"
  },
  pago: {
    backgroundColor: "blue",
    color: "white"
  },
  reiniciar: {
    backgroundColor:"inherit",
    color: "inherit"
  }
}
const regras = conjuntoRegras[tipoRegra]
if (regras){
  for (const key in regras) {
    const valor= regras[key]
    elemento.style[key] = valor
  }
}
}

// a função acima precisa receber dois prâmetros: elemento e o tipo de regra
// dentro da função, vc vai aplicar a regra especificada no elemento
// exemplo: alteraEstiloVisual(apartamento, 'devedor')
// exemplo: alteraEstiloVisual(apartamento, 'pago')
// exemplo: alteraEstiloVisual(apartamento, 'reiniciar')