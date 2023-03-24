// Primera parte de concatenar dos variables

let sal1 = "Hola";
let sal2 = prompt("Ingresa tu nombre");
console.log(sal1);
document.write(`${sal1} ${sal2}!`);

// Segunda parte practicado en clase 

let numb1 = parseInt(prompt("Ingresa un numero"));
let numb2 = parseInt(prompt("Ingresa otro numero"));
let numb3 = parseInt(prompt("Ingresa otra vez otro numero"));
let resultado = 0;
let resto = 0;
let wat = 0;
document.write(`<br><br>Los numeros que colocaste son: Nro1:${numb1}, Nro2:${numb2}, Num3:${numb3}!`);

//Suma 

resultado = numb1 + numb2;
resto = resultado % 2 != 0? "Impar":"Par";
document.write(`<br><br> El resultado de tu suma es: <b>${resultado}</b> y es un numero <b>${resto}</b>!`);
wat = resultado + numb3;
resto = wat % 2 != 0? "Impar":"Par";
document.write(`<br> El resultado wat de tu suma es: <b>${wat}</b> y es un numero <b>${resto}</b>!`);
//Resta

resultado = numb1 - numb2;
resto = resultado % 2 != 0? "Impar":"Par";
document.write(`<br><br> El resultado de tu resta es: <b>${resultado}</b> y es un numero <b>${resto}</b>!`);
wat = resultado - numb3;
resto = wat % 2 != 0? "Impar":"Par";
document.write(`<br> El resultado wat de tu resta es: <b>${wat}</b> y es un numero <b>${resto}</b>!`);

//Multiplicacion

resultado = numb1 * numb2;
resto = resultado % 2 != 0? "Impar":"Par";
document.write(`<br><br> El resultado de tu multiplicacion es: <b>${resultado}</b> y es un numero <b>${resto}</b>!`);
wat = resultado * numb3;
resto = wat % 2 != 0? "Impar":"Par";
document.write(`<br> El resultado wat de tu multiplicacion es: <b>${wat}</b> y es un numero <b>${resto}</b>!`);

//Division

resultado = numb1 / numb2;
resto = resultado % 2 != 0? "Impar":"Par";
document.write(`<br><br> El resultado de tu division es: <b>${resultado}</b> y es un numero <b>${resto}</b>!`);
wat = resultado / numb3;
resto = wat % 2 != 0? "Impar":"Par";
document.write(`<br> El resultado wat de tu division es: <b>${wat}</b> y es un numero <b>${resto}</b>!`);






