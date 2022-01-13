console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden " + ladoCuadrado);

function perimetroCuadrado(lado) {
  return lado *4;
}

const perimetroC = ladoCuadrado *4;

console.log("Perimetro " + perimetroC + "cm");

const areaC = ladoCuadrado * ladoCuadrado;

console.log("area " + areaC + "cm2");
console.groupEnd();

//triangulo
console.group("triangulo");
const ladoT1 = 6;
const ladoT2 = 6;
const baseT3 = 4;

console.log("Los lados del triangulo miden "
+ladoT1 + "cm, "
+ladoT2 + "cm, "
+baseT3 + "cm"
);

const alturaT = 5.5;

console.log("La altura es " + alturaT + "cm");

const perimetroT = ladoT1+ladoT2+baseT3;

console.log("El perimetro es " + perimetroT + " cm");

const areaT = baseT3*alturaT/2;

console.log("El area es " + areaT + " cm2");

console.groupEnd();

//circulo
console.group("circulo");

//radio
const radioC = 4;
//diametro
const diametroC = radioC *2;
//pi
const pi = Math.PI;
//circunferencia
const perimetroCirc = diametroC * pi;
//area
const areaCirc = pi* (radioC*radioC);

console.log("El radio del ciruclu es " + radioC + " cm");

console.log("El diametro del circulo es " + diametroC + " cm");

console.log("El perimetro del circulo es " + perimetroCirc + " cm");

console.log("El area del circulo es "+ areaCirc + " cm2");

console.groupEnd();

//aqui comienza con la interacción con HTML

function calculaP() {
  const input = document.getElementById("inputCua");
  const value = input.value;
  const pere = perimetroCuadrado(value);
  alert(pere);
}

function calculaR() {
  const input = document.getElementById("inputCua");
  const value = input.value;
  alert(perimetroCuadrado(value));
  console.log(perimetroCuadrado(value));
}
