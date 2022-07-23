console.log('Hola Mundo');

const h1 = document.querySelectorAll('h1');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector("#pid");
const input = document.querySelector('input');

console.log(h1);
console.log(parrafito);
console.log(pid);
console.log(input);


const objs = {
    h1: h1,
    parrafito: parrafito,
    pid: pid,
    input: input
};

console.log(objs);

function cambiandoValue(event) {
    console.log(event);
}

const numero1 = document.querySelector("#number1");
const numero2 = document.querySelector("#number2");
const btnCalcular = document.querySelector("#btnCalcular");
const inputChange = document.querySelector("#inputChange");

//
btnCalcular.addEventListener('click', () => {
    console.log(parseInt(numero1.value) + parseInt(numero2.value));
})
// inputChange.addEventListener('input', function (event) {
//     console.log(event)
// })

