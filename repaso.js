alert("Hola");
console.log("Funciona");

let for1 = document.querySelector(".resultado");
let for2= document.querySelector(".resultado2")

for (let i = 1; i <= 10; i++) {
  for1.innerHTML += "5 x " + i + " = " + (5 * i) + "<br>";
}

for (let i =1; i<=10; i++)
{for2.innerHTML += i + "<br>";
}