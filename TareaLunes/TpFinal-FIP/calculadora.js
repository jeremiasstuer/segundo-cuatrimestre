const bNumb = document.getElementsByName("numb");
const bOp = document.getElementsByName("op");
const calcular = document.getElementById("calcular");
const calcPantalla = document.getElementById("calculadoraPantalla");
const resultado = document.getElementById("resultado");
const clear = document.getElementById("clear");

const roman = document.getElementById("romanNums");
const numsTransform = document.getElementById("numsTransform");

let pNum = [];
let dNum = [];
let tipoOp = "";

bNumb.forEach((boton) => {
  boton.addEventListener("click", function () {
    if (tipoOp === "") {
      pNum += boton.innerText;
      resultado.innerText = pNum;
    } else {
      dNum += boton.innerText;
      resultado.innerText = dNum;
    }
  });
});

bOp.forEach((boton) => {
  boton.addEventListener("click", function () {
    tipoOp = boton.innerText;
    calcPantalla.innerText = `${pNum}${tipoOp}`;
    dNum = [];
  });
});

calcular.addEventListener("click", () => {
  switch (tipoOp) {
    case "+":
      calculadora(pNum, dNum, suma);
      break;
    case "-":
      calculadora(pNum, dNum, resta);
      break;
    case "x":
      calculadora(pNum, dNum, multi);
      break;
    case "/":
      calculadora(pNum, dNum, division);
      break;
  }
});

clear.addEventListener("click", () => {
  resultado.innerText = 0;
  calcPantalla.innerText = "";
  pNum = [];
  dNum = [];
  tipoOp = "";
});

function calculadora(nUno, nDos, cb) {
  calcPantalla.innerText = `${pNum} ${tipoOp} ${dNum} =`;
  if (nDos == "") {
    let cuenta = cb(nUno, 0);
    resultado.innerText = cuenta;
    calcPantalla.innerText = `${pNum} ${tipoOp} 0 = `
  } else {
    let cuenta = cb(nUno, nDos);
    resultado.innerText = cuenta;
    pNum = cuenta;
  }
}

const suma = (nUno, nDos) => parseInt(nUno) + parseInt(nDos);
const resta = (nUno, nDos) => parseInt(nUno) - parseInt(nDos);
const multi = (nUno, nDos) => parseInt(nUno) * parseInt(nDos);
const division = (nUno, nDos) => parseInt(nUno) / parseInt(nDos);
function convertirRomano(num) {
  const conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romano = "";
  for (let i in conversion) {
    while (num >= conversion[i]) {
      romano += i;
      num -= conversion[i];
    }
  }
  return romano;
}

roman.addEventListener("click", () => {
  console.log(convertirRomano(resultado.innerHTML));
  numsTransform.style.visibility="visible"
  numsTransform.innerHTML = convertirRomano(resultado.innerHTML);
});