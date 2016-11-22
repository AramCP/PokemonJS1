
var loadState = {

	preload: function() {
		juego.load.tilemap('pokemon', 'maperino.csv', null, Phaser.Tilemap.TILED_JSON);
    	juego.load.image('tiles', 'tileset.png');
    	juego.load.spritesheet('red', 'spritesh.png', 32, 64);
    	juego.load.image('menuImage', 'assets/intro.gif');
	},

	create: function() {
		juego.state.start('intro');
	}

};