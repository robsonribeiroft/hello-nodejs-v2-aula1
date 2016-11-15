var lista = [];
lista.push(1);
// [1]
lista.push("Arroz");
// [1,"Arroz"]
lista.push({a:2});
// [1,"Arroz",{a:2}]
lista.push([2,3,4]);
// [1,"Arroz",{a:2},[2,3,4]]
lista.pop();
// [1,"Arroz",{a:2}]
lista.shift();
// ["Arroz",{a:2}]
lista.unshift(4);
// [4,"Arroz",{a:2}]
lista1.length;

var mapa = {a:1};
mapa.b = 2;
mapa.c = {d:3};

var lista2 = [5,10,15,20,25,30,35];
var mapa2 = {a:1,b:2,c:3,d:4};

for(let x in lista2)
  console.log(lista2[x]);
// 5,10,15,20,25,30,35
for(let y in mapa2)
  console.log("%s: %s, ",y,mapa2[y]);
// a: 1, b: 2, c: 3, d: 4,
console.log("a" in mapa2)
// true
console.log("e" in mapa2)
// false
