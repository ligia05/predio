const rua = document.querySelector("body");
rua.style.backgroundColor = "blue";

const listaApartamentos = [
  {
    id: 2,
    apartamento: "11",
    pago: [
      {
        status: false,
        mes: [1, 2, 6]
      }
    ],
  },

  {
    id: 3,
    apartamento: "12",
    pago: [{
      status: false,
      mes: [3, 7]
    }
    ]
  },
  {
    id: 4,
    apartamento: "14",
    pago: [true],
  },
  {
    id: 5,
    apartamento: "21",
    pago: [true],
  },
  {
    id: 6,
    apartamento: "22",
    pago: [true],
  },
  {
    id: 8,
    apartamento: "23",
    pago: [true],
  },
  {
    id: 9,
    apartamento: "24",
    pago: [true],
  },
  {
    id: 10,
    apartamento: "31",
    pago: [true],
  },
  {
    id: 11,
    apartamento: "32",
    pago: [true],
  },
  {
    id: 12,
    apartamento: "33",
    pago: [true],
  },
  {
    id: 13,
    apartamento: "34",
    pago: [true],
  },
  {
    id: 14,
    apartamento: "41",
    pago: [{
      status: false,
      mes: [4, 7]
    }
    ]
  },
  {
    id: 15,
    apartamento: "42",
    pago: [{
      status: false,
      mes: [3, 9,10]
    }
    ]
  },
  {
    id: 16,
    apartamento: "43",
    pago: [{
      status: false,
      mes: [2,8]
    }
    ]
  },
  {
    id: 17,
    apartamento: "44",
    pago: [true],
  },
  {
    id: 18,
    apartamento: "51",
    pago: [true],
  },
  {
    id: 19,
    apartamento: "52",
    pago: [{
      status: false,
      mes: [1,2]
    }
    ]
  },
  {
    id: 20,
    apartamento: "53",
    pago: [true],
  },
  {
    id: 21,
    apartamento: "54",
    pago: [true],
  },
  {
    id: 22,
    apartamento: "61",
    pago: [{
      status: false,
      mes: [4, 7]
    }
    ]
  },
  {
    id: 23,
    apartamento: "62",
    pago: [true],
  },
  {
    id: 24,
    apartamento: "63",
    pago: [true],
  },
  {
    id: 25,
    apartamento: "64",
    pago: [true],
  },
  {
    id: 26,
    apartamento: "71",
    pago: [{
      status: false,
      mes: [5]
    }
    ]
  },
  {
    id: 27,
    apartamento: "72",
    pago: [true],
  },
  {
    id: 28,
    apartamento: "73",
    pago: [true],
  },
  {
    id: 29,
    apartamento: "74",
    pago: [true],
  },
  {
    id: 30,
    apartamento: "81",
    pago: [{
      status: false,
      mes: [8,9]
    }
    ]
  },
  {
    id: 31,
    apartamento: "82",
    pago: [true],
  },
  {
    id: 32,
    apartamento: "83",
    pago: [true],
  },
  {
    id: 33,
    apartamento: "84",
    pago: [{
      status: false,
      mes: [2,4]
    }
    ]
  },
  {
    id: 34,
    apartamento: "91",
    pago: [true],
  },
  {
    id: 35,
    apartamento: "92",
    pago: [true],
  },
  {
    id: 36,
    apartamento: "93",
    pago: [true],
  },
  {
    id: 37,
    apartamento: "94",
    pago: [true],
  },
  {
    id: 38,
    apartamento: "101",
    pago: [true],
  },
  {
    id: 39,
    apartamento: "102",
    pago: [{
      status: false,
      mes: [3, 7,9,11]
    }
    ]
  },
  {
    id: 40,
    apartamento: "103",
    pago: [true],
  },
  {
    id: 41,
    apartamento: "104",
    pago: [true],
  },
  {
    id: 42,
    apartamento: "201",
    pago: [true],
  },
  {
    id: 43,
    apartamento: "203",
    pago: [{
      status: false,
      mes: [1, 4]
    }
    ]
  },
  {
    id: 44,
    apartamento: "204",
    pago: [true],
  },
  {
    id: 45,
    apartamento: "301",
    pago: [true],
  },
  {
    id: 46,
    apartamento: "302",
    pago: [true],
  },
  {
    id: 48,
    apartamento: "303",
    pago: [{
      status: false,
      mes: [4,6]
    }
    ]
  },
  {
    id: 49,
    apartamento: "304",
    pago: [true],
  },
  {
    id: 50,
    apartamento: "401",
    pago: [true],
  },
  {
    id: 51,
    apartamento: "402",
    pago: [true],
  },
  {
    id: 52,
    apartamento: "403",
    pago: [true],
  },
  {
    id: 53,
    apartamento: "404",
    pago: [true],
  },
  {
    id: 54,
    apartamento: "13",
    pago: [true],
  },
  {
    id: 55,
    apartamento: "202",
    pago: [{
      status: false,
      mes: [7,8]
    }
    ]
  },
];

const todosApartamentos = Array.from(
  document.querySelectorAll(".apartamento")
).reverse();

listaApartamentos.sort(function (itemA, itemB) {
  if (Number(itemA.apartamento) < Number(itemB.apartamento)) {
    return -1;
  }

  if (Number(itemA.apartamento) > Number(itemB.apartamento)) {
    return 1;
  }

  return 0;
})

for (let i = 0; i < todosApartamentos.length; i++) {
  const apartamento = todosApartamentos[i];
  decideQuemEstaDevendo(listaApartamentos[i], apartamento);

  apartamento.addEventListener('contextmenu', pagando);
  apartamento.addEventListener('click', devendo);
}

function devendo(evento) {
  const target = evento.target;
  const id = +target.id;

  const index = listaApartamentos.findIndex(apartamento => apartamento.id === id);

  listaApartamentos[index].pago.push(false);

  for (let i = 0; i < todosApartamentos.length; i++) {
    decideQuemEstaDevendo(listaApartamentos[i], todosApartamentos[i]);
  }
}

function pagando(evento) {
  evento.preventDefault();
  const target = evento.target;
  const id = +target.id;

  const index = listaApartamentos.findIndex(apartamento => apartamento.id === id);

  const indexPagamento = listaApartamentos[index].pago.findIndex(value => !value);

  if (indexPagamento >= 0) {
    listaApartamentos[index].pago[indexPagamento] = true;
  }

  for (let i = 0; i < todosApartamentos.length; i++) {
    decideQuemEstaDevendo(listaApartamentos[i], todosApartamentos[i]);
  }
}

function decideQuemEstaDevendo(infoApartamento, apartamento) {
  apartamento.style.backgroundColor = 'inherit';
  apartamento.innerText = infoApartamento.apartamento;
  apartamento.id = infoApartamento.id;
  const naoEstaPago = infoApartamento.pago.includes(false);

  if (naoEstaPago) {
    apartamento.style.backgroundColor = "green";
  }
}

