var Boot = {
    preload: function() {
        this.load.image("preloadBar", "assets/bar.png");
        this.load.image('titlescreen', 'assets/titlescreen.png');
    },
    
    create: function() {
        this.state.start("Preloader");
    },
};