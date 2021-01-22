class game{
    constructor()
    {}
getGameState()
{
    gamerefence=database.ref("GameState");
    gamerefence.on("value",function(data){gameState=data.val()})
}

startGame(){
   if (gameState===0) 
   {
    player1 = new player();
    player1.getPlayerCount();
    form1 = new form();
    form1.display();
    
   }

}

}

  