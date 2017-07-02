var titlescreen;
var score = 0;

var Preloader = {
    preload: function() {
        titlescreen = game.add.tileSprite(0,0, 400, 490, 'titlescreen');
        
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 80, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);
        
        game.load.image('background', 'assets/background.png');
        game.load.image('bird', 'assets/rocket.png');
        game.load.image('pipe', 'assets/fire.png');
//        game.load.audio('jump', 'assets/jump.wav');
    },
    
    create: function(){
        this.state.start('mainMenue');
    },
    
};