var juego = new Phaser.Game(512,400,Phaser.AUTO, 'ejemplo');


juego.state.add('boot', bootState);
juego.state.add('load', loadState);
juego.state.add('intro', introState);
juego.state.add('partida', partidaState);
juego.state.start('boot');
