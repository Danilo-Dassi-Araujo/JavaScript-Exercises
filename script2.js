/* ### Transformar notas escolares

  Crie um algoritmo que transforme aas notas do sistema númerico para sistema de notas em caracteres tipo A B C

  * de 90 para cima - A
  * entre 80-89     - B
  * entre 70-79     - C
  * entre 60-69     - D
  * menor que 60    - F

*/

function getScore(nota) {
  
  let scoreA = nota >= 90 && nota <=100
  let scoreB = nota >= 80 && nota <=89
  let scoreC = nota >= 70 && nota <= 79
  let scoreD = nota >= 60 && nota <= 69
  let scoreF = nota < 60 && nota >= 0
  
  let notaFinal
  
    if(scoreA){
    notaFinal = "A"
  } else if (scoreB) {
    notaFinal = "B"
  } else if (scoreC) {
    notaFinal = "C"
  } else if (scoreD) {
    notaFinal = "D"
  }
   else if (scoreF){
    notaFinal = "F"
  } else{
    notaFinal = "Nota inválida"
  }
  
    return notaFinal
  }
  
  console.log(getScore(100))
  console.log(getScore(89))
  console.log(getScore(79))
  console.log(getScore(69))
  console.log(getScore(59))
  console.log(getScore(-2))
  console.log(getScore(101))
  
  