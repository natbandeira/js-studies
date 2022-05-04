// console.log("hello world");

// # FUNÇÕES BUILT-IN
// prompt()
// let idade = prompt("Digite sua idade");
// console.log(idade);

// let nome = prompt("Digite o seu nome")
// console.log(`O seu nome é ${nome}, e vc tem ${idade}`); //template literals = console.log(`string`${nomeVariável})


// math.x() - "M" em maisculo mesmo, pois é um conjunto de funções. Tb pode ser chamado de objeto. 
// let maior = Math.max(1,5,3,2); 
// console.log(maior);

// let menor = Math.min(1,5,3,2);
// console.log(menor);

// let arredondar = Math.round(3.5);
// console.log(arredondar);

// let arredondarPraCima = Math.ceil(3.2); // A função Math. ceil(x) retorna o menor número inteiro maior ou igual a "x". - Retorna o menor inteiro que é maior ou igual a um número.
// console.log(arredondarPraCima);


// Retorna o menor inteiro que é maior ou igual a um número: Math.ceil(x);
// Retorna o maior inteiro que é menor ou igual a um número: Math. floor(x)

// # ESTRUTURAS DE CONTROLE
// if();


// let nome = prompt("Digite seu nome: ");
// let idade = prompt("Digite sua idade: ");

// if(nome == "Nat" && idade == 30) {
//     console.log("Liberado");
// } else if(nome == "Larissa" && idade == 25){
//     console.log("OI FLOR DE MEXIRICA")
// } else if(nome == "Bezona rainha do nitro" && idade == 24){
//     console.log("se fudeuuuu")    
// }
// else {
//     console.log("pééééé");
// };

// # ESTRUTURAS DE REPETIÇÃO - tem sempre que ter um fim
// while

// o looping roda enquanto seu parametro for verdadeiro. é necessario incrementar ou decrementar para que o looping tenha fim.

// let x = 10
// let z = 0

// // operador >, sempre decrementar
// while(x > 0) { 
//     console.log(x);
//     x = x - 1;
// }

// // operador <, sempre incrementar
// while(z < 10) { 
//     console.log(z);
//     z = z + 1; 
// }

// # ESTRUTURAS DE REPETIÇÃO - tem sempre que ter um fim
// for

// for(let numero = 2; numero < 100; numero = numero * 2){
//     console.log(numero);
// }

// CONTINUE

// for(let i = 0; i < 10; i++) { // i++ e i-- ou i +=3 ou i -=2
//     if(i % 2 == 0){ // pega numero par. pegar numeor impar: if(i % 2 != 0)
//         console.log("pulando os pares..");
//         continue;
//     }

//     console.log(i);
// }


// let nome = "Nat";
// let age = 30;
// let alive = true;

// console.log(typeof nome); //typeof = retorna tipo de dado
// console.log(typeof age);
// console.log(typeof alive);

// let age = prompt("Digite sua idade: ");

// if(age >= 18) {
//     console.log("pode entrar!");
// } else {
//     console.log("peeeeé");
// }


// const nome = "nat";

// if(nome == "nat") {
//     console.log("cole natttt");
// }

// const num = 18;

// console.log(Math.pow(2,2));
// console.log(Math.pow(3,2));
// console.log(Math.pow(num,2));

// let speed = 42;

// if(speed > 80) {
//     console.log("TOMO MULTA TROXA");
// } else{
//     console.log("ta de boa, pode ir");
// }

// let age = prompt("Quantos anos vc tem?");
// let temCnh = prompt("Tem CNH?");

// if(age >= 18 && temCnh == false) {
//     console.log("vc ja tem idade para dirigir, mas precisa tirar a cnh antes!");
// } else if (age >= 18 && temCnh == true){
//     console.log("ai sim ein..");
// } else {
//     console.log("ai nao tem como te ajudar parça");
// };

// let i = 0;

// while(i <= 10) {
//     console.log(i);
//     i++;
// }



// for(let i = 100; i >= 50; i--){ // contando de 100 a 50
//     console.log(i);
// }


// for(let i = 0; i <= 50; i++) {

//     if(i % 2){ //if(i % 2 == 0) //console.log(`o numero ${i} é par`)
//         console.log(i + " é ímpar"); 
//     } else {
//         console.log(i + " é par.");
//     }
// };

// NUMEROS PRIMOS

// let numero = 4;
// let divisao = 0;

// for(let i = 0; i <= numero; i++) {
//     if(numero % i == 0) {
//     divisao++;
//     }
// }

// if(divisao == 2) {
//     console.log(`O número ${numero} é primo`);
// } else {
//     console.log(`O número ${numero} é tio`);
// }



// function imprimirNoConsole() {
//     console.log("olá mundo");
// }

// imprimirNoConsole();

// function imprimirUmNumero(num) {
//     console.log("O numero é: " + num);
// }

// imprimirUmNumero(42);


// function elevaAoQuadrado(num) { // função que calcula o quadrado de um numero
//     console.log("O quadrado de " + num + " é: " + Math.pow(num,3)); // Math.pow(base, expoente)
//     console.log("O quadrado de " + num + " é: " + (num * num));
// }

// elevaAoQuadrado(5);

// const numeroAleatorio = function() { // função anonima
//     //console.log(Math.random());
//     console.log(Math.random() * (15 - 0) + 0);
// }


// numeroAleatorio(); // jeito certo de invocar
// numeroAleatorio();
// numeroAleatorio();
// numeroAleatorio();
// numeroAleatorio();
// console.log(numeroAleatorio); // retorna "[Function: numeroAleatorio]" em azul, diferente


// function getRandomInt(min, max) {  // Gerando um número inteiro aleatório entre dois valores
//     min = Math.ceil(min);
//     max = Math.floor(max); // A função Math. floor(x) retorna o menor número inteiro dentre o número "x" - Retorna o maior inteiro que é menor ou igual a um número.
//     console.log(Math.floor(Math.random() * (max - min)) + min);
//   }

//   getRandomInt(0, 15);
//   getRandomInt(0, 15);
//   getRandomInt(0, 15);
//   getRandomInt(0, 15);

// ESTRUTURA DE FUNÇÕES

// const soma = function(a, b) {
//     return a + b;
// }

// console.log(soma(2, 3));

// const saudacao = function(nome) {
//     if(nome == "Nat") {
//         return "Olá, Nat linda, good job and keep going";
//     } else if (nome == "soraka") {
//         return "weeeeuuuuu weeuuuuuu weeuuuuu";
//     } else {
//         return "nope";
//     }       
// }

// console.log(saudacao("soraka")); // função anonima, chamar o nome da variavel + parametros

// function multiplicaTresNumeros(x, y, z) {
//     return x * y * z;
// }

// console.log(multiplicaTresNumeros(1, 2, 3)); // retorna 6
// console.log(multiplicaTresNumeros(4, 5, 6)); // retorna 120
// console.log(multiplicaTresNumeros(7, 8, 9)); // retorna 504
// console.log(multiplicaTresNumeros(10, 11, 12)); // retorna 1320 

// // Como fazer progressões aritmeticas?
// // 1320 - 504 = 816
// // 504 - 120 = 384
// // 120 - 6 = 114
// // todos divisiveis por 6
// const multiplicacao = multiplicaTresNumeros(4, 5, 6);
// console.log("O resultado é: " + multiplicacao);

// let x = 10;  // noções de escopo

// if(x > 5) {
//     let x = 20;
//     x++;
//     console.log(x);
// }

// console.log(x);

// let y = 5;

// const multiplicar = function(n) {
//     let y = n * 2;
//     console.log(y);
//     if(y == 10) {
//         let y = 55;
//         console.log(y);
//     }
// }

// multiplicar(y); // lembrar de invocar a função derrr

//  ARROW FUNCTIONS

// const parOuImpar = (n) => { // só precisa do parametro/argumento seguido da arrow
//     let resultado = n % 2;
//     if (resultado == 1) {
//         console.log("O número " + n + " é ímpar.")
//     } else {
//         console.log("O número " + n + " é par.")
//     }
// }
// parOuImpar(22);

// // se só tem 1 parametro, pode remover o parentese e o return:

// const raizQuadrada = (x) => {
//     return x * x;
// }

// arrow function enxugada, 1 parametro só
// const raizQuadradaUmParametro = n => n * n;
// console.log(raizQuadrada(2));
// console.log(raizQuadrada(3));


// treinando arrow functions pra fixar

// const quadradoDoNumero = (n) => {
//     return n * n;
// }

// console.log(quadradoDoNumero(5));

// const imc = (peso, altura) => {
//     return peso/altura;
// }

// console.log(imc(70, 1.65));

//NPM - node package manager (serve para instalar coisas com o node)


// const subtraiTres = n => n - 3; // 1 parametro
// console.log(subtraiTres(5));


// FUNÇÃO RECURSIVA // o ponto final sempre fica na primeira linha?
// prós: boa qnd uma logica de função precisa ser re-executada
// contras: n tem boa performance, se precisar ser executada varias vezes é melhor usar o looping, tb pode ficar confuso pra qm ta lendo, se nao entender de recursao

// function retornarNumeroPar(n) {
//     if(n % 2 == 0) {
//         console.log("n agora é par!"); // motivo: se o numero for impar, nao vai passar por essa condiçao de primeira, só quando a funcao for chamada de novo com o decremento.
//     } else {
//         console.log("seu numero agora é par!");
//         retornarNumeroPar(n - 1);
//     }
// }
// retornarNumeroPar(33);

// function recursao(n) {

//     if(n - 1 < 2) {
//         console.log("Recursão parou");
//     } else if(n % 2 != 0) {
//         console.log("Númeor impar " + n);
//         recursao(n - 1);
//     } else {
//         console.log("Número par " + n);
//         recursao(n -2);
//     }

// }

// recursao(39);
// recursao(10);
// recursao(55);
 

// function firstTime(){
//     console.log("Hello World");
// }

// firstTime()

// function mostraIdade(idade) {
//     console.log(`Você tem ${idade} anos`);
// }

// mostraIdade(42);

// function somaDoisNumeros(n1, n2) {
//     return n1 + n2;
// }
// console.log(somaDoisNumeros(22, 3))

// function randomNum(min, max) {
//     min = Math.ceil(min); // A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
//     max = Math.floor(max); // A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
//     console.log(Math.floor(Math.random() * (max - min)) + min);
// }

// randomNum(1, 200);


// function getRandomInt(min, max) {  // Gerando um número inteiro aleatório entre dois valores
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     console.log(Math.floor(Math.random() * (max - min)) + min);
//   }

//   getRandomInt(0, 15);
//   getRandomInt(0, 15);
//   getRandomInt(0, 15);
//   getRandomInt(0, 15);

// function numeroAleatorio(num) { // parametro diz o maximo
//     return Math.floor(Math.random() * num) + 1; // metodo math.floor para arredondar pra baixo (?)
// }

// console.log(numeroAleatorio(10));
// console.log(numeroAleatorio(56));
// console.log(numeroAleatorio(116));

// function podeEntrar(idade) {
//     if (idade >= 18) {
//         console.log("Você é maior de idade e pode entrar!")
//     } else {
//         quantoFalta = 18 - idade;
//         console.log("Ainda faltam " + quantoFalta + " anos. Aguarde na fila");
//     }
// }

// podeEntrar(14);
// podeEntrar(16);
// podeEntrar(26);

// function isNumber(inputText) {
//     if(typeof inputText == 'string')
// }

// isNumber();

// function isBoolean(inputBool) {

// }

// isBoolean();

// function isString(inputString) {

// }

// isString();

// retorna o tipo de dado do input
// function whatDataIsIt(input){
//     if(typeof input === 'string'){
//         console.log("É do tipo String.") ;
//     } else if (typeof input === 'number') {
//         console.log("É do tipo Number");
//     } else {
//         console.log("É do tipo Boolean.");
//     }
// }

// whatDataIsIt(true);

// transforma numero negativo em positivo

// function transformaNegativoPositivo(input) {
//     console.log("Transformando seu numero em positivo.......");
//     console.log("....só mais um segundo...");
//     let absNumber = Math.abs(input);
//     console.log(`Aqui está: ${absNumber}`);
// }

// transformaNegativoPositivo(-66);

// const transformaNegativoPositivo = n => Math.abs(n);
// console.log(transformaNegativoPositivo(-52));

// function transformaNumeroPositivo(numeroNegativo) {
//     return Math.abs(numeroNegativo);
// }

// console.log(transformaNumeroPositivo(-13));




// const s = texto => (texto.length > 10) ? `Ai nao parsa.. ${texto} passo dos limites` : `Blz, ${texto} tem menos de 10`;
// console.log(qtdChar("aaaaa aaaaa"));

// IF DENTRO DE ARROW FUNCTION

// function(a){
//     if(a < 10){
//         return 'valid';
//     }else{
//         return 'invalid';
//     }
// }

// fica assim
// a => (a < 10) ? 'valid' : 'invalid'


// const qtdChar = texto => {

//     if (texto.length > 10) {
//       console.log(`Ai nao parsa.. ${texto} passo dos limites`);
//     } else {
//       console.log(`Blz, ${texto} tem menos de 10`);
//     }
//   };

//   qtdChar("oie");

  // depois do => da pra abrir chaves

// function elevaAoQuadrado(num) { // função que calcula o quadrado de um numero
//      console.log("O quadrado de " + num + " é: " + Math.pow(num,3)); // Math.pow(base, expoente/potência)
//      console.log("O quadrado de " + num + " é: " + (num * num));
//  }


// function quadradoNum(n1, n2) {
//     console.log(`O número ${n1} elevado a ${n2} é: ${Math.pow(n1, n2)}`)
// }

// quadradoNum(2, 3);

// function potencia(a,b) {
//   // return Math.pow(a,b);
//   return a ** b; // nova estrutura de potencia
// }

// função que recebe um numero, decrementa e imprimi só os numeros pares
// function decrementa (n) {
//   for(let i = n; i >= 0; i--){
//     if (i % 2 == 0) {
//       console.log(i);
//   }
//  }
// }

// decrementa (64);
// decrementa (42);

// let arr = [1, 3, 5, 7, 9];
// let nomes = ["Nat", "Larissa"];
// let bool = [true, false, false];
// let misturado = [1, "nat", true];

// console.log(arr[4]); // pelo inspecionar no navegador, aparece o tamanho dele 
// console.log(nomes[0]);
// console.log(bool[1]);
// console.log(misturado[2]);
// console.log(arr[arr.length - 1]); // .lenght retorna quantos elementos tem, -1 pq o indice começa do 0 (acessar o ultimo elemento de um array)

// let numeros = [1, 3, 5, 8, 12];

// console.log(numeros.length);
// console.log(numeros['length']);
// console.log(numeros[3]);

// let nome = "Matheus";

// console.log(nome.length);

// MÉTODOS, transofrmar dados ou dar info 

// let marca = "Nike"; // utiliza () como se fosse invocar uma função

// console.log(typeof marca.toUpperCase);
// console.log(marca.toUpperCase()); // aumenta tudo maiusculo

// let marca2 = marca.toUpperCase();
// console.log(marca2.toLowerCase()); // tudo minusculo

// console.log(typeof marca2.toLowerCase);

// let pessoa = { // propriedades de pessoa
//   nome: "Nat",
//   profissao: "Deva",
//   idade: 30 // atribuição do objeto sempre com 2 pontos
// };

// console.log(`O nome é ${pessoa.nome} e tem ${pessoa.idade}`);


// [] = array
// {} = objeto

// let gatito = {
//   nome: "Shinji",
//   patas: 4,
//   miar: function(){  // método
//     console.log("mawww");
//   }
// };

// console.log(`A ${gatito.nome} tem ${gatito.patas} patas e mia assim`);
// gatito.miar()




// let carro = {
//   marca: "Pajero",
//   portas: 4,
//   cor: "vermelho"
// };


// console.log(carro);

// console.log(carro.portas);
// delete carro.portas; //deletando

// console.log(carro.portas); // retorna undefined

// carro.tetoSolar = true; // adicionando
// console.log(carro.tetoSolar);

// console.log(carro);

// let objetoA = {
//   prop1: "teste",
//   prop2: "testando",
// };


// let objetoB = {
//   prop3: "propriedade"
// };

// Object.assign(objetoA, objetoB); // método .assign: objetoA vai herdar todas as propriedades do objetoB
// console.log(objetoA);
// console.log(objetoB);

// let carro = {
//   portas: 4,
//   motor: "2.0",
//   cor: "preto",
// }

// let adicionais = {
//   tetoSolar: true,
//   travaEletrica: true,
//   arCondicionado: true
// }

// console.log(carro);
// Object.assign(carro, adicionais); 
// console.log(carro);

// let objetoA = {
//   prop1: "teste", //nome da propriedade: prop1: chave - e valor "teste"
//   prop2: "testando",
// };

// console.log(Object.keys(objetoA));


// let obj = {
//   "chave1": 1,
//   "chave2": 2,
//   "chave3": 3, 
// }

// console.log(obj);
// console.log(Object.keys(obj));


// let objetoA = {
//   pontos: 10,
// };

// objetoB = objetoA; // let objetoB = objetoA; (tb funcoiona)

// let objetoC = {
//   pontos: 10,
// };


// console.log(objetoA == objetoB); // retorna true
// console.log(objetoA == objetoC); // retorna false

// console.log(Object.keys(objetoA));
// console.log(objetoB);
// console.log(objetoC);

// let pessoa = {
//   nome: "nat",
//   idade: 30,
//   cor: "branca",
// }

// let clone = pessoa; // criando objeto novo, com base em um existente
// console.log(clone);

// clone.nome = "Nat clonada"; // alterando calor da propriedade
// console.log(clone.nome); // tb muda o a propriedade do objeto que vc copiou
// console.log(clone);
// console.log(pessoa);

//LOOP DE ARRAY

// let numeros = [1, 5, 10, 15, 20, 25];

// for(let i = 0; i <= numeros.length; i++){ //ver todos valores do array
//     console.log(numeros[i]); // acessa o indice de cada elemento, utilizando o i - que muda de valor a cada looping mas nunca passa do seu proprio tamanho.
// }

//métodos de array push (add) e pop (retira)

// let pessoas = ["Matheus", "João", "Ricardo"];
// let pessoaRemovida = pessoas.pop(); // atrelar o método a uma variavel para revelar o elemento removido

// console.log(pessoas); // ja retorna seu o ultimo elemento
// console.log(pessoaRemovida); // retorna o elemento removido

// let pessoas = ["Matheus", "João", "Ricardo"];
// let addPessoas = pessoas.push("Nat", "Larissa"); // invocar o método no array

// console.log(addPessoas); // retorna 5? kkkkkkkkkk
// console.log(pessoas);

// let pessoas = ["Matheus", "João", "Ricardo"];
// pessoas.push("Nat", "Larissa"); // adicionando elementos

// console.log(pessoas); 

// let frutas = ["Maçã", "Uva", "Pera"];
// let frutaRemovida = frutas.shift(); //remove o primeiro elemento

// console.log(frutas);
// console.log(frutaRemovida);

// let frutas = ["Maçã", "Uva", "Pera"];

// frutas.unshift("Banana");
// console.log(frutas);
// console.log(frutas[0]); // acessa o índice 0 - primeiro elemento e retorna "Banana"

// let numeros = [0, 1, 2, 1, 0];
// console.log(numeros.indexOf(1)); //procurando o primeiro índice do elemento 1
// console.log(numeros.lastIndexOf(1)); //procurando o ultimo indice do elemento 1

// let numeros = [1, 3, 5, 7, 9, 5];
// console.log(numeros.indexOf(5));
// console.log(numeros.lastIndexOf(5));


// slice - pegar/tirar elemento do meio ou qqr posicao do array
// .slice(n1, n2); o slice para um numero antes

// let numeros = [0, 1, 2, 3, 4, 5];
// console.log(numeros.slice(2,3)); // primeiro parametro é o inicio e o segundo ate onde vc quer pegar -1
// console.log(numeros.slice(3)); // se omitir o ultimo parametro que é onde ele tem que parar ele nao para, vai ate o final do array

// let nums = [1, 3, 5, 7, 9, 11, 13];
// console.log(nums.slice(1, 5));
// console.log(nums.slice(6));
// console.log(nums.slice(3, 4)); // para pegar só o 7
// console.log(nums.slice(-2)); // pega os 2 ultimos - decrementa o array
// console.log(nums.slice(+2)); 
// console.log(nums.slice(3, -2)); // pegao indice 3 menos os 2 ultimos



// forEach(); - parecido com o loop de for ou while mas é um método pronto do js

// const nomes = ["Nat", "Larissa", "Be", "Mamo"];

// nomes.forEach(nome => { //nome no singular mesmo pq js interpreta como parametro para pegar cada indice do array, parecido com o array[i] no for
//   for (let i = 0; i <= 5; i++){
//     console.log(`O nome é: ${nome}.`);
//   };
// });

// includes() Verifica se o Array tem um determinado elemento

// let carros = ["Gol bolinha", "Celtinha maduro", "Monza brabo", "Uninho bombado"];
// console.log(carros.includes("paninho de limpeza"));

// if (carros.includes("Celtinha maduro")){

// };

// reverse() - inverte a ordem

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse()); // retorna [ 5, 4, 3, 2, 1 ]

// remove td que nao é string (inclsuive espaços) - utilizado para limpar infos desnecessarias de uma string
// validação de codigo malicioso
// let texto = " \n teste \ndois"; //  \n quebra de linha
// console.log(texto.trim()); // retorna teste

// let nome = "    Nat";
// let nomeCorrigido = nome.trim();
// console.log(nome); 
// console.log(nomeCorrigido); 

// let milAoContrario = "1";
// console.log(milAoContrario.padStart(5, "0")); // 1º parametro: qtd de caracteres a String terá. 2º parametro: o que vc deseja add antes

// let sku = "34"; //SKU: logística de armazém e designa os diferentes itens do estoque, estando normalmente associado a um código, comum em ecommerce/lojas
// console.log(sku.padStart(6, "0"));

// let frase = "O rato roeu a roupa do rei de Roma.";
// let palavras = frase.split(" ");
// console.log(palavras);

let frutas = "Banana;Pera;Uva;Morango";
console.log(frutas.split(";"));