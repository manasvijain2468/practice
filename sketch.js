var canvas;
var background;

var gameState =0;
var playerCount ;
var form , game ,player;
var database;
var allPlayers;

function setup(){
    canvas = createCanvas(400,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
if(playerCount == 4){
    game.update(1);
}
console.log(gameState);
if(gameState == 1){
    var display_position = 130;
    game.play();
}

}

