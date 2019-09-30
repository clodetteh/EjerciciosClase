/*
Una cátedra de la facultad necesita calcular automáticamente los promedios de los 3 exámenes dados por los alumnos en este cuatrimestre. 
Para esto es necesario que se ingrese al sistema las 3 notas y guardarlas en un arreglo. 
Además se debe verificar que los datos ingresados sean validos (números entre 1 y 10) y pedir en caso contrario la nota nuevamente.
*/

obtenerValores = () => {
  let listaNotas = [];

  while (listaNotas.length < 3) {
    let notaIngresada = parseInt(prompt("Ingrese una nota"));
    if (esNotaValida(notaIngresada)) listaNotas.push(notaIngresada);
  }

  calcularPromedio(listaNotas);
};

esNotaValida = nota => {
  if (isNaN(nota)) return false;
  if (nota < 1 || nota > 10) return false;
  return true;
};

calcularPromedio = listaNotas => {
  let promedio = 0;
  s;
  for (let i = 0; i < listaNotas.length; i++) {
    promedio += listaNotas[i];
  }

  alert(`El promedio es: ${(promedio / listaNotas.length).toFixed(2)}`);
};

window.onload = obtenerValores();
