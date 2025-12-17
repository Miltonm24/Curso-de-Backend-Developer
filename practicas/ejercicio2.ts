/* Crea una función que calcule el área de un rectángulo. La función debe:

Recibir dos parámetros: ancho (number) y alto (number)
Retornar el área calculada (number)
Incluir validación para asegurar que los valores sean positivos
Mostrar el resultado en consola */
//ejercicio2.ts
function calcularArearectangulo(ancho: number, alto: number): number {
    if (ancho<=0 || alto <=0) {
        throw new Error('Los valores deben ser positivo');
    }
    return ancho * alto;
}

const ancho: number = 45;
const alto: number = 30;
const area: number = calcularArearectangulo(ancho,alto);
console.log(`el area de un rectangulo de ${ancho}x${alto} es:${area}`);

