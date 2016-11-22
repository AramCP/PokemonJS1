
var introState = {


	create: function(){
		var intro = juego.add.sprite('menuImage');
		var wkey = juego.input.keyboard.addKey(Phaser.Keyboard.W);
		wkey.onDown.addOnce(this.start, this);
	},

	start: function(){
		juego.state.start('partida');
	},
};

