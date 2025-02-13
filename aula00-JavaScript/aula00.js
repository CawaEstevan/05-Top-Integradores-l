//EXEMPLO 01
// Usando var (escopo global/função)

var nome = "Cawa";
console.log(nome);


if(true){
    var nome = "Maria";
    console.log(nome);
}

nome = 5.10;
console.log(nome);

//Usando let (escopo de bloco)

let idade = 34;
console.log(idade);

if(true){
    let idade  = 25;
    console.log(idade);
}

idade ="Rafael";
console.log(idade);

//Usando const (escopo de bloco e valor constante)

const PI = 3.4;
console.log(PI);

if(true){
    const PI  = 2.5;
    console.log(PI);
}

PI = "Topicos Integradores 1 ";
console.log(PI);

