class Game{
constructor(){

}

getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
    gameState = data.val();    
})
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState == 0){
       player = new Player();
       player.getCount();
       form = new Form();
       form.display();
        
    }
}
    play(){
        console.log()
        form.hide();
        text("Game Start",120,100)
        Player.getPlayerInfo();

        if(allPlayer !== undefined){
            var display_position = 130;
            var pos=130;

        for(var plr in allPlayers){
            pos += 20
            text(allPlayers[plr].name+" : "+allPlayers[plr].distance,100,pos)
        }

        }
    }


}