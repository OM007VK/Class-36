class form{
         constructor()
{}         

display(){

var title = createElement("h2");
title.html("Car Racing Game");
title.position(130,0);

var input=createInput("Name");
input.position(130,160);

var button = createButton("PLAY");
button.position(250,200);



button.mousePressed(function()
{
 input.hide();
 button.hide();

var name = input.value()

 var greeting = createElement("h3");
 greeting.html("Hello " + name)
 greeting.position(130,160);
 
 playerCount = playerCount + 1;
 player1.updateCount(playerCount);
 player1.update(name)
})

}

}

