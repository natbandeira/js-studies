# Arrays
Permite adicionar um conjunto de valores a uma variável e é possível acessar cada elemento da lista (array). Deve ser escrito entre colchetes, separando os valores por vírgulas: 

```js
let numeros = [1, 3, 5, 8, 12];
let infos = ["Matheus, 12, true, "teste", 2];
```

## Acessando elementos
Podemos acessar um array pelo seu índice, por exemplo: `js arr[1]` -> `nomeDoArray[IndiceEscolhido]`. Lembrando que o primeiro índice sempre é 0, ou seja, para acessar o primeiro elemento, faça: `arr[0];`

## Propriedades
Propriedades são as informações que podem ser verificadas de um valor. Quase todos os valores de JS tem propriedades, menos o `null` e  `undefined`. Um nome seguido de .algo é **propriedade** (diferente de método), que podem ser criadas para cada objeto e retornam um valor fixo.. `string.propriedade()` Podemos acessar as propriedades de 2 maneiras:

```js
let numeros = [1, 3, 5, 8, 12];

console.log(numeros.length);
console.log(numeros['length']);
console.log(numeros[3]);
```

ou

```js
let nome = "Matheus";

console.log(nome.length);
```

## Loops em Arrays
Ténica muito utilizada para acessar cada um dos valores:

```js
let numeros = [1, 5, 10, 15, 20, 25];

for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i]);
}
```

# Métodos
São propriedades que funcionam como funções. `string.metodo()`. Strings e Arrays contém métodos:

```js
let marca = "Nike";

console.log(typeof marca);
console.log(marca.toUpperCase());
console.log(marca.toLowerCase()); 
```
## Métodos de Arrays
push e pop - manipulam sempre o **ÚLTIMO** elemento:
</br>
  
* .pop();
```js
let pessoas = ["Matheus, ""João", "Ricardo"];
let pessoaRemovida = pessoas.pop(); // atrelar o método à uma variavel para revelar o elemento removido

console.log(pessoas);
console.log(pessoaRemovida); // retorna elemento removido
```

* .push();
```js
let pessoas = ["Matheus", "João", "Ricardo"];
pessoas.push("Nat", "Larissa"); // adicionando elementos

console.log(pessoas); 
```
shift e unshift - manipulam sempre o **PRIMEIRO** elemento:
  </br>
  
* .shift();
```js
let frutas = ["Maçã", "Uva", "Pera"];
let frutaRemovida = frutas.shift(); 

console.log(frutas);
console.log(frutaRemovida); //retorna "Maçã"
```

* .unshift();
```js
let frutas = ["Maçã", "Uva", "Pera"];

frutas.unshift("Banana");
console.log(frutas); 
console.log(frutas[0]); //acessa o índice 0 - primeiro elemento e retorna "Banana"
```
* .indexOf() e .lastIndexOf() - encontram índices

```js
let numeros = [0, 1, 2, 1, 0];
console.log(numeros.indexOf(1)); //procurando o primeiro índice do elemento 1
console.log(numeros.lastIndexOf(1)); //procurando o ultimo indice do elemento 1
```

* .slice();
</br>
Retorna um Array a partir de outro Array. O retornado é determinado pelos parâmetros que são os índices de início e fim do novo Array.

```js
let numeros = [0, 1, 2, 3, 4, 5];
console.log(numeros.slice(2,3));
console.log(numeros.slice(3));
```
* .forEach();
</br>
Itera cada elemento do array:
```js
const nomes = ["Nat", "Larissa", "Be", "Mamo"];

nomes.forEach(nome => { // parâmetro passado é a unidade do array, o JS interpreta como índice
  console.log(`O nome é: ${nome}.`);
});
```

* .includes();
</br>
Verifica se o Array tem um determinado elemento:
```js
let carros = ["Gol bolinha", "Celtinha maduro", "Monza brabo", "Uninho bombado"];
console.log(carros.includes("Gol bolinha")); // retorna true
```

* .reverse();
</br>
Inverte um Array:
```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // retorna [ 5, 4, 3, 2, 1 ]
```

## Métodos de Strings
* .trim();
</br>
Remove tudo que não é String: (se utilizar em uma frase, os espaços tanbém serão removidos)

```js
let nome = "    Nat";
let nomeCorrigido = nome.trim();
console.log(nome); // retorna     Nat
console.log(nomeCorrigido); // retorna Nat
```
* .padStart();
</br>
Inserir caracteres antes da String:

```js
let milAoContrario = "1";
console.log(milAoContrario.padStart(4, "0")); // 1º parametro: qtd de caracteres a String terá. 2º parametro: o que vc deseja add antes
```

* .split();
</br>
Divide uma string por um separador e retorna um Array:

```js
let frutas = "Banana;Pera;Uva;Morango";
console.log(frutas.split(";")); // passar como argumento o separador
// retorna [ 'Banana', 'Pera', 'Uva', 'Morango' ]
```


# Objetos
São uma coleção de propriedades, parecidos com Arrays que nos permite criar Propriedades e Métodos. Podemos acessar estas propriedas:

```js
let pessoa = {
    nome: "Nat",
    profissao: "Deva",
    idade: 30
}

console.log(pessoa.nome);
console.log(pessoa.idade);
```

## Manipulando propriedades:
</br>

* Podemos adicionar e deletar propriedades ao longo do nosso programa:

```js
let carro = {
    marca: "Pajero",
    portas: 4,
    cor: "vermelho"
};

console.log(carro.portas);
delete carro.portas;

console.log(carro.portas);

carro.tetoSolar = true;
console.log(carro.tetoSolar);
```

* Também podemos copiar todas as propriedades ed um objeto para outro:

```js
let objetoA = {
    prop1: "teste",
    prop2: "testando",
};


let objetoB = {
    prop3: "propriedade"
};

Object.assign(objetoA, objetoB);
console.log(ObjetoA);
```

* Verificando quais as chaves cada objeto possui:

```js
let objettoA = {
    prop1: "teste";
    prop2: "testando";
};

console.log(Object.keys(objetoA));
```

# Mutação (Mutability)
Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo.

```js
let objetoA = {
    pontos: 10,
};

objetoB = objetoA;

let objetoC = {
    pontos: 10,
};


console.log(objetoA == objetoB); // retorna true
console.log(objetoA == objetoC); // retorna false
```