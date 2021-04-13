window.onload = function load() {
  main();
};

function main() {
  document.getElementById("fight").addEventListener('click', attack);
  document.getElementById("bag").addEventListener('click', bag);
  document.getElementById("pokemon").addEventListener('click', pokemon);
  document.getElementById("run").addEventListener('click', run);

  //First message
  var text = "Qué debería hacer Charmander";
  var element = document.getElementById("window");
  typeWriter(element, text);

  //Instance pokemon
  var charmander = new Pokemon('Charmander', 1, 'fire', null, 39, 52, 43, 60, 50, 65);
  var bulbasaur = new Pokemon('Bulbasaur', 1, 'grass', null, 45, 49, 49, 65, 65, 45);

}

function typeWriter(elemento, txt) {
  var i_writer = 0;
  write();
  function write() {
    if (i_writer < txt.length) {
      elemento.innerHTML += txt.charAt(i_writer);
      i_writer++;
      setTimeout(write, 20);
    }
  }
}

function attack() {
  alert("al atackeer");
}