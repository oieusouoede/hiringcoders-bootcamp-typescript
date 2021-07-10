/*  Typescript é basicamente um pacote de recursos pra deixar o Javascript
    mais tipado. */

function somar (num1: number, num2: number){
    return num1 + num2;
}

const numero1 = 10;
const numero2 = 5;

const res = somar (numero1, numero2);
console.log(res);
