class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad() {
        this.velocidad += 1;

    }
    reducirVelocidad() {
        this.velocidad -= 1;
    }

}

class Autobus extends Coche { //Extends es herencia
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad); //Dar los valores de esta clase a la clase padre
        this.altura = 5;
    }
    mostrarAltura() {
        return 'la altura del bus es ' + this.altura + ' metros';
    }
}

var autobus1 = new Autobus('Pegaso', 700, 2008);
console.log(autobus1);
console.log(autobus1.mostrarAltura());

var coche1 = new Coche('bmw', 200, 2017);
var coche2 = new Coche('audi', 400, 2010);
var coche3 = new Coche('Mercedes', 300, 2020);

document.write('velocidad ' + coche1.velocidad);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write('velocidad ' + coche1.velocidad);
console.log(coche1);