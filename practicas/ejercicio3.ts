/*Crea un programa que maneje un array de números y realice las siguientes operaciones:

Declara un array de números con al menos 5 elementos
Calcula la suma de todos los elementos
Encuentra el número mayor y el menor
Muestra todos los resultados en consola'*/
//ejerciocio3.ts
function numerosArray(numeros: number[]): void {
    if (numeros.length ===0) {
        console.log('el array esta vacio');
        return;
    }

    const suma: number = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    console.log(`array: ${numeros.join(', ')}`);
    console.log(`suma: ${suma}`);
    console.log(`mayor: ${mayor}`);
    console.log(`menor: ${menor}`);
}

const numeros: number[] = [23,25,12,45,65,84,72];
numerosArray(numeros);