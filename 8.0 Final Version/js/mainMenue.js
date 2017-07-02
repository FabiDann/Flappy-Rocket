var mainMenue = {
    create: function(){
        this.createButton(game, 170, 185, 70, 40, function(){
            this.state.start('mainState');
        });
        
        titlescreen = game.add.tileSprite(0,0, 400, 490, 'titlescreen');
        
        if (score != 0 && score != -1)
            this.labelScore = game.add.text(50, 245, "Your Score:         " + score, { font: "20px Impact, Charcoal, sans-serif", fill: "#ffffff" });
    },
    
    update: function(){
        
    },
    
    createButton: function(game,x,y,w,h,callback){
        var button1 = game.add.button(x,y,'button', callback,this,2,1,0);
        
        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
    },
};