var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var racers, racer1, racer2;

var track , racer1_img , racer2_img , 

function preload(){
  track = loadImage("images/track.jpg");
  racer1_img = loadImage("images/car1.png");
  racer2_img = loadImage("images/car2.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

