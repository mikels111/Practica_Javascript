const config = {
    width: 1000,
    height: 800,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
var game = new Phaser.Game(config);

function preload() {
    console.log("preload");
    this.load.image("star", "../assets/star.png");
    this.load.image("seven", "../assets/seven.jpg");
}

function create() {
    console.log("create");
    this.add.image(50, 100, 'star');
    this.add.image(320, 180, 'seven');
}

function update() {
    console.log("update");
}