// let numero1 = 5;
// let numero2 = 15;

// let resultado= numero1 + numero2;
// alert(resultado);

 // let numero1 = 5;
 // let numero2 = 55;
 // let numero3 = 60;
 // let numero4 = 35;

 // let media =(numero1 + numero2 + numero3 + numero4) / 4;

 // alert(media)

  // let numero1 = parseFloat(prompt("Digite seu peso"));

  // let numero2 = parseFloat(prompt("Digite sua altura"));
  
  // let media =(numero1 * numero2);
 //  alert(imc.tofixed(2));

// let numero = parseInt(prompt('Digite um número'));
// if (numero % 2 === 0) {

    // alert( 'O número é par');
// } else{
 // alert('O número é ímpar')
//}

// let numero1 = parseFloat(prompt('Digite um número:'));
// let numero2 = parseFloat(prompt('Digite um número:'));

// if(numero1 > numero2) {
//     alert('O primeiro número é maior');

// }else{
//     alert('O primeiro é menor que o número digitado');
// }
//  let numero1 = parseFloat(prompt('Digite um número:'));
//  let numero2 = parseFloat(prompt('Digite um número:'));

//  if(numero1 == numero2) {
//     alert('os numeros são iguais');
//  }else{
//     alert('Os numeros são diferentes');
//  }
// let numero1 = prompt('Digite alguma coisa:');
//  let numero2 = prompt('Digite alguma coisa:');

//  if(numero1 == numero2){
//     alert('Os numeros são iguais');
//  }else{
//     alert('Os numeros são diferentes');
//  }
//  let numero1 = 7;
//  let numero2 = 10;
//  let numero3 = 15;

//  let estaEntre = numero1 > numero2 && numero1 < numero3;
//  alert('O numero está entre');

// let celsius = parseFloat(prompt('digite a temperatura'));
// let total = (celsius * 1.8) + 32;
// alert('a temperatura é:' + total)

// const quilometro = parseFloat(prompt('digite a quilometragem'));
// const centimetros = quilometro * 100000;
// const metros = quilometros * 1000;
// const mensagem = 'centimetros:' + '/ 
// alert('a temperatura é:' + total)

//  let altura = parseFloat(prompt("Digite sua altura"));
//   let idade = parseFloat(prompt('Digite sua idade'));
//   if(idade <= 12){
//     alert('voce  nao pode entrar');
//   } else if (altura >=1.20){
//   alert('voce pode entrar');
//   } else if(altura <1.20){
//     alert("voce nao pode entrar")
//   }
//   let peso = parseFloat(prompt("Digite seu peso"));
//   let altura = parseFloat(prompt("Digite sua altura "));

//   let imc = peso / (altura ** 2);

//   if (imc < 18.5) {
//     alert('voce esta abaixo do peso. ' + imc);
//   } else if (imc >= 18.5 && imc < 25){
//     alert("voce esta sobrepeso." + imc);
//   } else {
//     alert("voce está obeso." + imc)
//   }
//   let idadeUsuario = 20;
//   let maioridade = 18;
//   if (idadeUsuario >= maioridade){
//     let possuiCNH = true;
//     if (possuiCNH){
//         alert("voce é maior e pode ter a CNH");
//     } else{
//         alert("voce é de maior, mas nao tem a CNH");
//     } else{
//         alert("vc é de menor e nso dirigir");
//     }
//   }
//  for (let i = 0; i< 10; i++) {
//     console.log(i);
//  }
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
function gerarnumeroaleatorio() {
    return Math.floor(Math.random() * 100) +1;
}
function jogoadvinhação() {
    const numeroaleatorio = gerarnumeroaleatorio();
    let tentativaRestantes = 5;
    alert("vamos jogar o jogo da advinhação");
    alert("tente advinhar um numero entre 1 a 100, dentro de 5 vezes");
    for(let i = 1; i <= 5; i++) {
        const palpite = parseInt(prompt)("tentativa $(1) tentativas");
    }
    if (isNaN(palpite)) {
        alert("Digite um numero ");
    }
    if (palpite === numeroaleatorio) {
        alert("Parabens! voce acertou o numero em ${i} tentativas");
        return;
        
    } else if (palpite < numeroaleatorio) {
        alert("tente um numero maior");    
    } else {
        alert("tente um numero");
    }

    tentativaRestantes--;
    alert("tentativas restantes: ${tentativasrestantes}")
    if (tentativaRestantes === ) {
        alert("suas tentativas acabaram. O numero era ${numeroaleatorio}");
        return
        
    }
}