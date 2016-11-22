
var bootState = {

	create: function() {

		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.state.start('load')
	}

};