// alert('hola mundo');
var nombre = 'Mikel Seara';
var altura = 180;

var concatenecion = nombre + " " + altura;
document.write(nombre);
document.write(altura);

var datos = document.getElementById('datos');

datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es ${nombre}</h2>
<h3>Mido ${altura}</h3>
`;

var nombres = ['mikel', 'antonio', 'maria'];

nombres.forEach(function(nombre) {
    datos.innerHTML += " " + nombre;
});

// Esta y la de arriba son iguales
nombres.forEach((nombre) => {
    datos.innerHTML += " " + nombre;
});

var coche = {
    modelo: 'Mercedes clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad: "Valor aleatorio"
}

document.write('<h1>' + coche.modelo + '<br>' + coche.antiguedad + '</h1>')
coche.mostrarDatos();
console.log(coche);


// (Promesas) representa un valor que puede estar disponible ahora,después o nunca. 
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = 'hola mundo, soy Mikel Seara';
        saludo = false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000); //2 segundos
});

saludar.then(resultado => {
    alert(resultado);
}).catch(err => {
    alert(err);
}); //El metodo 'then' se ejecuta después de que llegue el resultado