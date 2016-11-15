function soma(x,y) {
  return x + y;
}

var soma = function(x,y){
  return x + y;
}

function foo(x){
  console.log(x);
}

function bar(x,y){
  x(y);
}

//uso
bar(foo, 2); // imprime 2

//classe anônima, mostra o segundo parametro ao quadrado
bar(function(x){console.log(x*x)}, 2);

//Paradigma funcinal
bar((x) => console.log(x), 2);

function compara(a,b){
  return a - b;
}


let lista = [2,1,3];

lista.sort(compara); //[1,2,3]

lista.sort((a,b) => a-b) //[1,2,3]
