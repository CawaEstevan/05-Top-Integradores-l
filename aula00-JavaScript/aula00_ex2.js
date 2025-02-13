//Exemplo 2 

//Funções Simples

    function saudacao(nome){
        return "Olá," + nome + "!";
    }
console.log(saudacao("Rafael"));

// Funçaõ Anônima()

const soma = function(a,b){
    return a + b;
}

console.log(soma("Rony","Rústico"));

// Arrow Function (função de seta) =>

const multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,6));

//Objeto em javascript

const  Pessoa = {
    nomeUsuario:"Rony bike",
    idade:"29",
    email:"padastro das maria",
    usuario:"Atacante bikezera",
    saudar: function(){
        return "oi, meu nome é " + this.nomeUsuario +" e eu sou um" + this.usuario + ".";
    }

} 
console.log(Pessoa.nomeUsuario);
console.log(Pessoa.saudar());