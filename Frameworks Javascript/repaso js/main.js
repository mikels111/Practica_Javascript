alert('hola mundo');
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