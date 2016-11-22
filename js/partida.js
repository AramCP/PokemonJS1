
var partidaState = {


	create: function() {
        
    var map;
    var layer;
    var jugador;
    var cursors;

    map = juego.add.tilemap('pokemon'); 
    map.addTilesetImage('tileset1', 'tiles'); 

    layer1 = map.createLayer('Capa1');
    layer2 = map.createLayer('Capa2');
    layer3 = map.createLayer('Capa3');
    layer_arboles = map.createLayer('CapaArboles');
    layer_arboles2 = map.createLayer('CapaArboles2');
    layer1.resizeWorld(); 


	jugador = juego.add.sprite(1000, 930, 'red');

    layer4 = map.createLayer('Capa4');

    map.setCollisionBetween(148, 152, true, layer_arboles);
    map.setCollisionBetween(95, 101, true, layer3);
    map.setCollisionBetween(32, 38, true, layer3);
    map.setCollisionBetween(102, 105, true, layer3);
    map.setCollisionBetween(81, 84, true, layer3);
    map.setCollisionBetween(60, 63, true, layer3);
    map.setCollisionBetween(69, 73, true, layer3);
    map.setCollisionBetween(48, 51, true, layer3);
    map.setCollisionBetween(6, 10, true, layer3);

	juego.physics.arcade.enable(jugador);
    juego.camera.follow(jugador);
    jugador.frame = 1;

	jugador.animations.add('arriba', [3, 4, 5,], 8, true);
    jugador.animations.add('abajo', [0, 1, 2,], 8, true);
    jugador.animations.add('izquierda', [9, 10, 11,], 8, true);
    jugador.animations.add('derecha', [6, 7, 8,], 8, true);

	cursors = juego.input.keyboard.createCursorKeys();
},

update: function() {

    juego.physics.arcade.collide(jugador, layer_arboles);
    juego.physics.arcade.collide(jugador, layer3);

	jugador.body.velocity.x = 0;
    jugador.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        jugador.body.velocity.x = -120;
        jugador.animations.play('izquierda');
		return;
    }
    if (cursors.right.isDown)
    {
        jugador.body.velocity.x = 120;
        jugador.animations.play('derecha');
		return;
    }
    if (cursors.up.isDown)
    {
        jugador.body.velocity.y = -120;
        jugador.animations.play('arriba');
		return;
    }
    if (cursors.down.isDown)
    {
        jugador.body.velocity.y = 120;
        jugador.animations.play('abajo');
		return;
    }
    else
    {
        jugador.animations.stop();
        jugador.frame = 1;
    }
},

};
