document.getElementById('generate').addEventListener('click', generar);
var length = document.getElementById('length');
var numbers = document.getElementById('num');
var letters = document.getElementById('lett');
var upper = document.getElementById('upper');
var symbols = document.getElementById('symbols');
var cUpper = document.getElementById('cUpper');
var cSymbols = document.getElementById('cSymbols');
var result = document.getElementById('result');
cUpper.checked = true;
cSymbols.checked = true;
length.value = 0;
numbers.value = 0;
letters.value = 0;
upper.value = 0;
symbols.value = 0;


function generar() {

    if (parseInt(numbers.value) > parseInt(length.value)) {
        alert("La cantidad de NÚMEROS es demasiado grande");

    }
    if (parseInt(letters.value) > parseInt(length.value)) {
        alert("La cantidad de LETRAS es demasiado grande");
    }

    if (cUpper.checked) {
        if (parseInt(upper.value) > parseInt(letters.value)) {
            alert('La cantidad de letras en MAYUSCULAS es demasiado grande');
        }
    } else {
        upper.value = 0;
    }
    if (cSymbols.checked) {
        if (parseInt(symbols.value) > parseInt(length.value)) {
            alert('La cantidad de SIMBOLOS es demasiado grande');
        }
    } else {
        symbols.value = 0;
    }

    var sum = parseInt(letters.value) + parseInt(numbers.value) + parseInt(symbols.value);


    if (parseInt(upper.value) > parseInt(letters.value) || sum != parseInt(length.value) || sum == 0) {
        alert("Algo ha ido mal");
    } else {
        let password = makePassword(numbers.value, letters.value, upper.value, symbols.value);
        password = password.split("");
        password.forEach((element, index) => {
            let randomPosition = Math.floor(Math.random() * password.length);
            {
                // console.log("{");
                // console.log("position:" + index);
                // console.log("elemento:" + element);

                // console.log("random position: " + randomPosition);
                // console.log("element of random position:" + password[randomPosition]);

                // console.log("}");
            }
            password[index] = password[randomPosition];
            password[randomPosition] = element;

        });
        result.innerHTML = password.join('');

    }
}
function makePassword(num, lett, upper, symbol) {
    let result = '';
    let numbers = '0123456789'
    let lowCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let low = parseInt(lett) - parseInt(upper);

    charType = [
        {
            quant: num,
            chars: numbers
        },
        {
            quant: low,
            chars: lowCaseLetters
        },
        {
            quant: upper,
            chars: upperCaseLetters
        },
        {
            quant: symbol,
            chars: symbols
        }
    ];
    charType.forEach(element => {
        result += randomCharacter(element.quant, element.chars);
    });

    return result;
}

function randomCharacter(value, charValues) {
    let result = '';
    for (let i = 0; i < value; i++) {
        result += charValues.charAt(Math.floor(Math.random() *
            charValues.length));
    }
    return result;
}
function randomPosition() {

}

length.addEventListener('change', () => {
    let resto = length.value % 2;
    let half = length.value / 2;
    half = parseInt(half);
    if (!resto) {
        numbers.value = half;
        letters.value = half;
    } else {
        numbers.value = half + 1;
        letters.value = half - 0, 5;
    }
});

cUpper.addEventListener('change', () => {
    if (upper.disabled == true) {
        upper.disabled = false;
    } else {
        upper.disabled = true;
    }

});
cSymbols.addEventListener('change', () => {
    if (symbols.disabled == true) {
        symbols.disabled = false;
    } else {
        symbols.disabled = true;
    }

});


