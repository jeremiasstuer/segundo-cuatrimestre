const bNumb = document.getElementsByName("numb")
const bOp = document.getElementsByName("op")
const calcular = document.getElementById("calcular")
const calcPantalla = document.getElementById("calculadoraPantalla")
const resultado = document.getElementById("resultado")
const clear = document.getElementById("clear")

let pNum =[]
let dNum = []
let tipoOp =""

bNumb.forEach((boton)=>{
  boton.addEventListener("click",function(){
    if(tipoOp === ""){
      pNum+=boton.innerText
      resultado.innerText = pNum
    }else{
      
      dNum+=boton.innerText
      resultado.innerText = dNum
      
    }
  })
})

bOp.forEach((boton)=>{
  boton.addEventListener("click",function(){ 
      tipoOp = boton.innerText
      calcPantalla.innerText = `${pNum}${tipoOp}` 
      dNum = []
  })
})


calcular.addEventListener("click",()=>{
  switch(tipoOp){
    case "+": 
    calculadora(pNum,dNum,suma)
    break;
    case "-": 
    calculadora(pNum,dNum,resta)
    break;
    case "x": 
    calculadora(pNum,dNum,multi)
    break;
    case "/": 
    calculadora(pNum,dNum,division)
    break;
  }

})

clear.addEventListener("click",()=>{
  resultado.innerText = 0
  calcPantalla.innerText = ""
  pNum = []
  dNum = []
  tipoOp = ""
})

function calculadora( nUno, nDos,cb){
    calcPantalla.innerText =  `${pNum} ${tipoOp} ${dNum} =`   
    let cuenta = cb(nUno,nDos)
    resultado.innerText = cuenta
    pNum = cuenta

}

const suma =  (nUno, nDos) => parseInt( nUno) + parseInt( nDos)
const resta =  (nUno, nDos) =>  parseInt( nUno) - parseInt( nDos)
const multi =  (nUno, nDos) =>  parseInt( nUno) * parseInt( nDos)
const division =  (nUno, nDos) =>  parseInt( nUno) / parseInt( nDos)

