var valoratual = ""
var valoranterior = ""
var operacao_atual = ""

function number(NUM) {
   valoratual += NUM
   atualizarvisor()

}

function atualizarvisor() {
   var visor = ""
   if (valoranterior !== "") {
      visor += valoranterior
      if (operacao_atual !== "") {
         visor += operacao_atual

      }

   }
   visor+=valoratual
   document.getElementById("textarea").value = visor


}


function limpar() {
   document.getElementById("textarea").value = 0
   valoratual = ""
   operacao_atual=""
   valoranterior=""

}
function operacao(Symbol) {

   operacao_atual = Symbol
   valoranterior = valoratual
   valoratual = ""
   atualizarvisor()


}

function calcular(){
   console.log(valoranterior + operacao_atual + valoratual);
   console.log(parseFloat(valoranterior) + operacao_atual + parseFloat(valoratual))
   let resultado;
   switch(operacao_atual){
       case '+':
           resultado = parseFloat(valoranterior)  +parseFloat(valoratual);
           break;
       case '-':
           resultado = parseFloat(valoranterior)  -parseFloat(valoratual);
           break;
       case '*':
           resultado = parseFloat(valoranterior)  *parseFloat(valoratual);
           break;
       case '/':
           resultado = parseFloat(valoranterior)  /parseFloat(valoratual);
       break;
   }
   valoratual = resultado.toString()
   operacao_atual = '';
   valoranterior = '';
   atualizarvisor();
}


document.addEventListener("keydown", (event) => {
   if (event.key.match(/[0-9]/)) {
     number(event.key);
   } else if (event.key.match(/[%\/\*\-\+]/)) {
      operacao(event.key);
   }
   if (event.key === "Enter") {
      calcular()
   }
})