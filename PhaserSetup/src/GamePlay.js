//Function que administra el game
GamePlayerManager = {
    init: function(){
        console.log('init');
    },
    preload: function(){
        console.log('preload');
    },
    create: function(){
        console.log('create');
    },
    update:function(){
        console.log('update');
    }
}
//Width, heigth, render
var game = new Phaser.Game(1136, 640, Phaser.AUTO);
//Se agrega un estado a la instancia
game.state.add('gameplay',GamePlayerManager);
//Se inicia la instacia del estado
game.state.start('gameplay');
